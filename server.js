import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = createServer(app);

// ✅ CORS origins list including both Vercel URLs
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:10000",
  "https://chatapp-io-2-frontend.vercel.app",
  "https://chat-app-io-one.vercel.app"
];

// ✅ Middleware: log incoming origin for debugging
app.use((req, res, next) => {
  console.log("Request origin:", req.headers.origin);
  next();
});

// ✅ CORS middleware for Express
app.use(cors({
  origin: allowedOrigins
}));

app.use(express.json());

// ✅ Socket.IO server with matching CORS config
const io = new Server(server, {
  cors: {
    origin: allowedOrigins,
    methods: ["GET", "POST"]
  }
});

// Data stores
let messages = [];
let users = new Map();
let typingUsers = new Set();

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date() });
});

// Socket.IO logic
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('join', (userData) => {
    users.set(socket.id, {
      id: socket.id,
      username: userData.username,
      avatar: userData.avatar,
      joinedAt: new Date()
    });

    socket.emit('chat_history', messages);
    io.emit('users_update', Array.from(users.values()));

    const joinMessage = {
      id: Date.now(),
      type: 'system',
      message: `${userData.username} joined the chat`,
      timestamp: new Date(),
      username: 'System'
    };

    messages.push(joinMessage);
    io.emit('message', joinMessage);
  });

  socket.on('send_message', (messageData) => {
    const user = users.get(socket.id);
    if (!user) return;

    const message = {
      id: Date.now(),
      type: 'user',
      message: messageData.message,
      username: user.username,
      avatar: user.avatar,
      timestamp: new Date(),
      userId: socket.id
    };

    messages.push(message);
    io.emit('message', message);
  });

  socket.on('typing_start', () => {
    const user = users.get(socket.id);
    if (user) {
      typingUsers.add(user.username);
      socket.broadcast.emit('user_typing', Array.from(typingUsers));
    }
  });

  socket.on('typing_stop', () => {
    const user = users.get(socket.id);
    if (user) {
      typingUsers.delete(user.username);
      socket.broadcast.emit('user_typing', Array.from(typingUsers));
    }
  });

  socket.on('disconnect', () => {
    const user = users.get(socket.id);
    if (user) {
      typingUsers.delete(user.username);

      const leaveMessage = {
        id: Date.now(),
        type: 'system',
        message: `${user.username} left the chat`,
        timestamp: new Date(),
        username: 'System'
      };

      messages.push(leaveMessage);
      io.emit('message', leaveMessage);

      users.delete(socket.id);
      io.emit('users_update', Array.from(users.values()));
      io.emit('user_typing', Array.from(typingUsers));
    }

    console.log('User disconnected:', socket.id);
  });
});

// Start server
const PORT = process.env.PORT || 10000;
server.listen(PORT, () => {
  console.log(`✅ Chat server running on port ${PORT}`);
});
