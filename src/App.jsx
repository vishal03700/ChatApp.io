import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import LoginForm from './components/LoginForm';
import ChatRoom from './components/ChatRoom';
import './styles/App.css';

function App() {
  const [socket, setSocket] = useState(null);
  const [user, setUser] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    if (user) {
      const newSocket = io('https://chatapp-io-2.onrender.com/');
      
      newSocket.on('connect', () => {
        setIsConnected(true);
        newSocket.emit('join', user);
      });

      newSocket.on('disconnect', () => {
        setIsConnected(false);
      });

      setSocket(newSocket);

      return () => {
        newSocket.close();
      };
    }
  }, [user]);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    if (socket) {
      socket.disconnect();
    }
    setUser(null);
    setSocket(null);
    setIsConnected(false);
  };

  return (
    <div className="app">
      {!user ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <ChatRoom 
          socket={socket}
          user={user}
          isConnected={isConnected}
          onLogout={handleLogout}
        />
      )}
    </div>
  );
}

export default App;