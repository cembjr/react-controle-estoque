import React, { createContext, useCallback } from "react";
import { UsuarioToken } from "../Services/LoginService";

interface AuthContextData {
  logar(usuarioToken: UsuarioToken, token: string): void;
  deslogar(): void;
  getUsuarioToken(): UsuarioToken;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider: React.FC = ({ children }) => {
  const logar = useCallback(
    (usuarioToken: UsuarioToken, token: string): void => {    
      localStorage.setItem("usuarioToken", btoa(JSON.stringify(usuarioToken)));
      localStorage.setItem("token", btoa(token));
    },
    []
  );

  const deslogar = useCallback((): void => {
    localStorage.removeItem("usuarioToken");
    localStorage.removeItem("token");
  }, []);

 /*  const getToken = useCallback((): string => {
    return atob(localStorage.getItem("token") || "");
  }, []); */

  const getUsuarioToken = useCallback((): UsuarioToken => {
    const usuario = atob(localStorage.getItem("usuarioToken") || "");
    return (usuario ? JSON.parse(usuario) : "") as UsuarioToken;
  }, []);

  return (
    <>
      <AuthContext.Provider
        value={{ logar, getUsuarioToken, deslogar }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};
