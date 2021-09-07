import React, { createContext, useState, useContext, useEffect } from 'react';
import * as auth from '../services/data';
import api from '../services/api';

interface User {
  name: string;
  email: string;
}

interface AuthContext {
  user: User | null;
  signed: boolean;
  signIn(): Promise<void>;
  logOut(): void;
}

export const AuthContex = createContext({} as AuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    function getLocalStorage(): void {
      const storageUser = localStorage.getItem('@RJAuth:user');
      const storageToken = localStorage.getItem('@RJAuth:token');

      if (storageUser && storageToken) {
        api.defaults.headers.Authorization = `Bearer ${storageToken}`;
        setUser(JSON.parse(storageUser));
      }
    }
    getLocalStorage();
  }, []);

  async function signIn() {
    const responseUser = await auth.SignIn();
    setUser(responseUser.user);

    api.defaults.headers.Authorization = `Bearer ${responseUser.token}`;
    localStorage.setItem('@RJAuth:user', JSON.stringify(responseUser.user));
    localStorage.setItem('@RJAuth:token', JSON.stringify(responseUser.token));
  }

  async function logOut() {
    localStorage.clear();
    setUser(null);
  }

  return (
    <AuthContex.Provider value={{ signed: !!user, user, signIn, logOut }}>
      {children}
    </AuthContex.Provider>
  );
};

export function useAuth(): AuthContext {
  const context = useContext(AuthContex);

  if (!context) {
    throw new Error('AuthProvider not Provider');
  }

  return context;
}
