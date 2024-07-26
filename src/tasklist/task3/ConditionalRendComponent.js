import React, { useState } from 'react';
import './ConditionalRendComponent.css';

const ConditionalRendComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="container">
      {isLoggedIn ? (
        <div className="welcome-message">
          <h1>Welcome, User!</h1>
          <p>You are now logged in.</p>
        </div>
      ) : (
        <div className="login-message">
          <h1>Please Log In</h1>
          <p>You are currently logged out. Please log in to access your account.</p>
        </div>
      )}
      <button onClick={toggleLogin} className='logbutton'>
        {isLoggedIn ? 'Log Out' : 'Log In'}
      </button>
    </div>
  );
};

export default ConditionalRendComponent;
