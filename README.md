<div align="center">

# 🗨️ बातचीत

### Real-time Chat Application

<p>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101" alt="Socket.IO" />
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="Express.js" />
</p>

<p>
  <strong>A modern, real-time chat application built with Node.js, Express, Socket.IO, and React (Vite)</strong>
</p>

[Live Demo](https://chat-app-io-one.vercel.app/) • [Report Bug](https://github.com/vishal03700/ChatApp.io/issues) • [Request Feature](https://github.com/vishal03700/ChatApp.io/issues)

</div>

---

## 🚀 Features

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin: 20px 0;">

**⚡ Real-time Communication**
- Instant messaging with Socket.IO
- Live user status updates
- Message delivery confirmations

**🎨 Modern UI/UX**
- Clean, responsive design
- React + Vite for fast development
- Mobile-friendly interface

**🔧 Robust Backend**
- Express.js server architecture
- CORS enabled for cross-origin requests
- Scalable Socket.IO implementation

**🚀 Easy Deployment**
- Ready for platforms like Vercel
- Environment-based configuration
- Production-optimized builds

</div>

---

## 🛠️ Tech Stack

<table align="center">
<tr>
<td align="center"><strong>Frontend</strong></td>
<td align="center"><strong>Backend</strong></td>
<td align="center"><strong>Real-time</strong></td>
</tr>
<tr>
<td align="center">
  <img src="https://reactjs.org/logo-og.png" width="100" height="50" alt="React" /><br/>
  React + Vite
</td>
<td align="center">
  <img src="https://nodejs.org/static/images/logo.svg" width="100" height="50" alt="Node.js" /><br/>
  Node.js + Express
</td>
<td align="center">
  <img src="https://socket.io/images/logo.svg" width="100" height="50" alt="Socket.IO" /><br/>
  Socket.IO
</td>
</tr>
</table>

---

## 🚀 Quick Start

### 📋 Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

### 📥 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vishal03700/ChatApp.io.git
   cd ChatApp.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   
   ```

3. **Start the development server**
   ```bash
   npm run dev
  
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:5173` to see the application running!

---

## 📁 Project Structure

```
बातचीत/
├── client/              # React frontend using Vite
│   └── src/             # React components, assets
├── server.js            # Express + Socket.IO backend
├── package.json         # Scripts for both frontend & backend
├── README.md            # Project documentation

```

---

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Runs both frontend and backend in development mode |
| `npm run build` | Builds the app for production |
| `npm run start` | Starts the production server |
| `npm run client` | Runs only the frontend development server |
| `npm run server` | Runs only the backend server |

---

## 🌐 API Endpoints

### Socket.IO Events

| Event | Description | Payload |
|-------|-------------|---------|
| `connection` | User connects to chat | `socket` |
| `message` | Send/receive messages | `{ user, message, timestamp }` |
| `disconnect` | User leaves chat | `socket` |
| `typing` | User typing indicator | `{ user, isTyping }` |

### HTTP Endpoints

```
GET  /                    # Serve React application
GET  /api/health         # Health check endpoint
```



## 🎯 Usage

1. **Join the Chat**: Open the application in your browser
2. **Enter Username**: Set your display name
3. **Start Chatting**: Send messages in real-time
4. **Multiple Users**: Open multiple tabs to test real-time functionality

---


## 👨‍💻 Author

<div align="center">

**Vishal Kumar Yadav**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/vishal03700)

</div>

---

## 🙏 Acknowledgments

- [Socket.IO](https://socket.io/) for real-time communication
- [React](https://reactjs.org/) for the frontend framework
- [Vite](https://vitejs.dev/) for fast development experience
- [Express.js](https://expressjs.com/) for the backend framework
- [Render](https://render.com/) for hosting platform

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ by [Vishal Kumar Yadav](https://github.com/vishal03700)

</div>
