import React, { createContext, useCallback, useContext, useState } from "react";
import { UsuarioToken } from "../Services/LoginService";
import { useHistory } from 'react-router-dom';

interface AuthContextData {
  logar(usuarioToken: UsuarioToken, token: string): void;
  deslogar(): void;
  usuarioLogado: UsuarioToken;
}

interface AuthState {
  usuarioLogado: UsuarioToken;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const history = useHistory();
  
  const [usuarioLogado, setUsuarioLogado] = useState<AuthState>(() => {
  const usuarioStorage = atob(localStorage.getItem("usuarioToken") || "");
    const usuarioLogado = (usuarioStorage
      ? JSON.parse(usuarioStorage)
      : "") as UsuarioToken;

    if (!!usuarioLogado) return { usuarioLogado };
    return {} as AuthState;
  });
  const logar = useCallback(
    (usuarioToken: UsuarioToken, token: string): void => {
      localStorage.setItem("usuarioToken", btoa(JSON.stringify(usuarioToken)));
      localStorage.setItem("token", btoa(token));
      setUsuarioLogado({ usuarioLogado: usuarioToken });
    },
    []
  );
  
  const deslogar = useCallback((): void => {
    localStorage.removeItem("usuarioToken");
    localStorage.removeItem("token");
    setUsuarioLogado({} as AuthState);
    
    history.push('/login');
  }, [history]);

  /*  const getToken = useCallback((): string => {
    return atob(localStorage.getItem("token") || "");
  }, []); */

  return (
    <>
      <AuthContext.Provider
        value={{ logar, usuarioLogado: usuarioLogado.usuarioLogado, deslogar }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context)
    throw new Error("useAuth deve ser usado dentro de um AuthProvider!");

  return context;
}
