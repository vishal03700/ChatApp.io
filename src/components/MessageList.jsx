import { useEffect, useRef } from 'react';
import '../styles/MessageList.css';

function MessageList({ messages, currentUser, typingUsers }) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, typingUsers]);

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const isOwnMessage = (message) => {
    return message.userId === currentUser.id;
  };

  return (
    <div className="message-list">
      {messages.map((message) => (
        <div 
          key={message.id} 
          className={`message ${message.type} ${isOwnMessage(message) ? 'own' : 'other'}`}
        >
          {message.type === 'user' && !isOwnMessage(message) && (
            <div className="message-avatar">{message.avatar}</div>
          )}
          
          <div className="message-content">
            {message.type === 'user' && !isOwnMessage(message) && (
              <div className="message-username">{message.username}</div>
            )}
            <div className="message-text">{message.message}</div>
            <div className="message-time">{formatTime(message.timestamp)}</div>
          </div>
          
          {message.type === 'user' && isOwnMessage(message) && (
            <div className="message-avatar">{message.avatar}</div>
          )}
        </div>
      ))}
      
      {typingUsers.length > 0 && (
        <div className="typing-indicator">
          <div className="typing-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span className="typing-text">
            {typingUsers.length === 1 
              ? `${typingUsers[0]} is typing...`
              : `${typingUsers.length} users are typing...`
            }
          </span>
        </div>
      )}
      
      <div ref={messagesEndRef} />
    </div>
  );
}

export default MessageList;