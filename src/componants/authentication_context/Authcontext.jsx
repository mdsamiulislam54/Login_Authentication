import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  const handleLogin = (email, password) => {
    setIsAuthenticated(true);
    if(email?.trim() && password?.trim()){
        setUser({ email, password });
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser({});
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, handleLogin, handleLogout,  user }}>
      {children}
    </AuthContext.Provider>
  );
};
