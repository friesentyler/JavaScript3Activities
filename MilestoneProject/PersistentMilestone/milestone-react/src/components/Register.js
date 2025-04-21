import React, { useState } from 'react';
import MilestoneService from '../services/MilestoneService';

const Register = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    isAdmin: false
  });

  const [wasSubmitted, setWasSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    MilestoneService.registerUser(user)
      .then(response => {
        console.log("Registration successful!", response);
        setWasSubmitted(true);
      })
      .catch(error => {
        console.error("Registration failed.", error);
      });
  };

  return (
    <div className="text-center" style={{ marginLeft: '50px', marginRight: '50px' }}>
      {!wasSubmitted ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              className="form-control"
              placeholder="Enter your username"
              required
              name="username"
              value={user.username}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="form-control"
              placeholder="Enter your email"
              required
              name="email"
              value={user.email}
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
              value={user.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">Register</button>
        </form>
      ) : (
        <div>Registration successful.</div>
      )}
    </div>
  );
};

export default Register;
