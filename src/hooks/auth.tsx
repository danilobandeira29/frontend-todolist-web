import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

interface IUser {
  id: string;
  name: string;
  email: string;
}

interface IData {
  user: IUser;
  token: string;
}

interface ISignInCredentials {
  email: string;
  password: string;
}

interface IAuthProviderState {
  user: IUser;
  signIn(data: ISignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<IAuthProviderState>({} as IAuthProviderState);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IData>(() => {
    const user = localStorage.getItem('TodoList:user');
    const token = localStorage.getItem('TodoList:token');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, user: JSON.parse(user) };
    }

    return {} as IData;
  });

  const signIn = useCallback(
    async ({ email, password }: ISignInCredentials) => {
      const response = await api.post<IData>('/users/sessions', {
        email,
        password,
      });

      const { token, user } = response.data;

      localStorage.setItem('TodoList:token', token);
      localStorage.setItem('TodoList:user', JSON.stringify(user));

      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({ token, user });
    },
    [],
  );

  const signOut = useCallback(() => {
    localStorage.removeItem('TodoList:token');
    localStorage.removeItem('TodoList:user');
    setData({} as IData);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthProviderState {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be use within AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
