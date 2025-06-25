import '../styles/UserList.css';

function UserList({ users, currentUser, onClose }) {
  const formatJoinTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className="user-list">
      <div className="user-list-header">
        <h3>Online Users ({users.length})</h3>
        <button className="close-button" onClick={onClose}>×</button>
      </div>
      
      <div className="user-list-content">
        {users.map((user) => (
          <div 
            key={user.id} 
            className={`user-item ${user.id === currentUser.id ? 'current-user' : ''}`}
          >
            <div className="user-avatar">{user.avatar}</div>
            <div className="user-details">
              <div className="user-name">
                {user.username}
                {user.id === currentUser.id && <span className="you-label">(You)</span>}
              </div>
              <div className="user-join-time">
                Joined at {formatJoinTime(user.joinedAt)}
              </div>
            </div>
            <div className="user-status">🟢</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;