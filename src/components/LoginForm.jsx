import { useState } from 'react';
import '../styles/LoginForm.css';

const AVATAR_OPTIONS = [
  '😀', '😎', '👻', '🦄', '🐶', 
  '🦊', '🐼', '🐸', '🦁', '🐯', '🐨', '🐷',
];

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState(AVATAR_OPTIONS[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onLogin({
        username: username.trim(),
        avatar: selectedAvatar
      });
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>बातचीत</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Choose your username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              maxLength="20"
              required
            />
          </div>
          
          <div className="form-group">
            <label>Pick your avatar:</label>
            <div className="avatar-selector">
              {AVATAR_OPTIONS.map((avatar) => (
                <button
                  key={avatar}
                  type="button"
                  className={`avatar-option ${selectedAvatar === avatar ? 'selected' : ''}`}
                  onClick={() => setSelectedAvatar(avatar)}
                >
                  {avatar}
                </button>
              ))}
            </div>
          </div>
          
          <button type="submit" className="join-button">
            Join Chat
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;