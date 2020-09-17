import React, { createContext, useCallback, useContext, useState } from "react";
import { UsuarioToken } from "../Services/LoginService";
import { useHistory } from "react-router-dom";

interface AuthContextData {
  logar(usuarioToken: UsuarioToken, token: string): void;
  deslogar(): void;
  usuarioLogado: UsuarioToken;
  token: string;
}

interface AuthState {
  usuarioLogado: UsuarioToken;
  token: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const history = useHistory();

  const [authState, setAuthState] = useState<AuthState>(() => {
    const usuarioStorage = atob(localStorage.getItem("usuarioToken") || "");
    const token = atob(localStorage.getItem("token") || "");
    const usuarioLogado = (usuarioStorage
      ? JSON.parse(usuarioStorage)
      : "") as UsuarioToken;

    if (!!usuarioLogado) return { usuarioLogado, token };
    return {} as AuthState;
  });
  const logar = useCallback(
    (usuarioToken: UsuarioToken, token: string): void => {
      localStorage.setItem("usuarioToken", btoa(JSON.stringify(usuarioToken)));
      localStorage.setItem("token", btoa(token));
      setAuthState({ usuarioLogado: usuarioToken, token });
    },
    []
  );

  const deslogar = useCallback((): void => {
    localStorage.removeItem("usuarioToken");
    localStorage.removeItem("token");
    setAuthState({} as AuthState);

    history.push("/login");
  }, [history]);

  return (
    <>
      <AuthContext.Provider
        value={{
          logar,
          usuarioLogado: authState.usuarioLogado,
          token: authState.token,
          deslogar,
        }}
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
