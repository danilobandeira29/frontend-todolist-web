import React, { createContext, useCallback, useContext } from 'react';

interface AuthProviderState {
  name: string;
  signIn(): void;
}

const AuthContext = createContext<AuthProviderState>({} as AuthProviderState);

const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(() => {
    console.log('signIn');
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'Danilo', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthProviderState {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be use within AuthProvider');
  }

  return context;
}

export { AuthContext, AuthProvider, useAuth };
