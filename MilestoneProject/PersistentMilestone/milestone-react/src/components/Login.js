import React, { useState } from 'react';
import MilestoneService from '../services/MilestoneService';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const [wasSubmitted, setWasSubmitted] = useState(false);
  const [token, setToken] = useState('');
  const [username, setUsername] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    MilestoneService.loginUser(credentials)
      .then(response => {
        console.log("Login successful!", response);
        setWasSubmitted(true);
        setToken(response.data.token);
        setUsername(response.data.user.username);
      })
      .catch(error => {
        console.error("Login failed.", error);
      });
  };

  return (
    <div className="text-center" style={{ marginLeft: '50px', marginRight: '50px' }}>
      {!wasSubmitted ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="form-control"
              placeholder="Enter your email"
              required
              name="email"
              value={credentials.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className="form-control"
              placeholder="Enter your password"
              required
              name="password"
              value={credentials.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      ) : (
        <div>
          Login successful. Your token is <strong>{token}</strong><br />
          Welcome back <strong>{username}</strong>.
        </div>
      )}
    </div>
  );
};

export default Login;
