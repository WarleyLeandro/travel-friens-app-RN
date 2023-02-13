import { createContext, useContext, useState, ReactNode } from "react";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextData {
  isAuth: boolean;
  setIsAuth: (isAuth: boolean) => void;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  //TODO: essa function ira verificar se o usuario ta logado
  const getIsLogged = () => {
    return isAuth;
  };

  const logout = () => {
    setIsAuth(false);
  };

  const login = () => {
    setIsAuth(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}
