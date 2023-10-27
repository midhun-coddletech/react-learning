import React from 'react';
import './LoginForm.css';

function LoginForm() {
  return (
    <form className="input">
      <p className="label">Username</p>
      <input type="text" className="input__box" id="username" />
      <p className="label">Password</p>
      <input type="text" className="input__box" id="password" />
      <button className="loginBtn" type="button">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
