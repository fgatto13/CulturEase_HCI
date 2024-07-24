// useAuth.js
import { useState, useEffect } from 'react';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Create default admin user if not already created
    const adminEmail = 'admin@example.com';
    const adminPassword = 'adminPassword1';
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const adminExists = users.find((user) => user.username === adminEmail);

    if (!adminExists) {
      const adminUser = { username: adminEmail, password: adminPassword };
      users.push(adminUser);
      localStorage.setItem('users', JSON.stringify(users));
    }

    const storedUser = JSON.parse(localStorage.getItem('currentUser'));
    if (storedUser) {
      setUser(storedUser);
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [user]);

  const register = (username, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.find((user) => user.username === username);

    if (userExists) {
      throw new Error('User already exists');
    }

    const newUser = { username, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
  };

  const login = (username, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((user) => user.username === username && user.password === password);

    if (!user) {
      throw new Error('Invalid credentials');
    }

    localStorage.setItem('currentUser', JSON.stringify(user));
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem('currentUser');
    setUser(null);
  };

  return { user, isLoggedIn, register, login, logout };
};

export default useAuth;