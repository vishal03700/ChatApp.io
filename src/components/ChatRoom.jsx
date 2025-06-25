import { useState, useEffect } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import UserList from './UserList';
import '../styles/ChatRoom.css';

function ChatRoom({ socket, user, isConnected, onLogout }) {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [typingUsers, setTypingUsers] = useState([]);
  const [showUserList, setShowUserList] = useState(false);

  useEffect(() => {
    if (!socket) return;

    socket.on('message', (message) => {
      setMessages(prev => [...prev, message]);
    });

    socket.on('chat_history', (history) => {
      setMessages(history);
    });

    socket.on('users_update', (userList) => {
      setUsers(userList);
    });

    socket.on('user_typing', (typingList) => {
      setTypingUsers(typingList);
    });

    return () => {
      socket.off('message');
      socket.off('chat_history');
      socket.off('users_update');
      socket.off('user_typing');
    };
  }, [socket]);

  const handleSendMessage = (message) => {
    if (socket && message.trim()) {
      socket.emit('send_message', { message });
    }
  };

  const handleTypingStart = () => {
    if (socket) {
      socket.emit('typing_start');
    }
  };

  const handleTypingStop = () => {
    if (socket) {
      socket.emit('typing_stop');
    }
  };

  return (
    <div className="chat-room">
      <header className="chat-header">
        <div className="header-left">
          <h1>Chat Room</h1>
          <div className="connection-status">
            <span className={`status-indicator ${isConnected ? 'connected' : 'disconnected'}`}>
              {isConnected ? '🟢' : '🔴'}
            </span>
            {isConnected ? 'Connected' : 'Disconnected'}
          </div>
        </div>
        
        <div className="header-right">
          <button 
            className="users-toggle"
            onClick={() => setShowUserList(!showUserList)}
          >
            👥 {users.length}
          </button>
          <div className="user-info">
            <span className="user-avatar">{user.avatar}</span>
            <span className="username">{user.username}</span>
          </div>
          <button className="logout-button" onClick={onLogout}>
            Logout
          </button>
        </div>
      </header>

      <div className="chat-content">
        <div className="main-chat">
          <MessageList 
            messages={messages} 
            currentUser={user}
            typingUsers={typingUsers}
          />
          <MessageInput 
            onSendMessage={handleSendMessage}
            onTypingStart={handleTypingStart}
            onTypingStop={handleTypingStop}
            disabled={!isConnected}
          />
        </div>
        
        {showUserList && (
          <UserList 
            users={users} 
            currentUser={user}
            onClose={() => setShowUserList(false)}
          />
        )}
      </div>
    </div>
  );
}

export default ChatRoom;