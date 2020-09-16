import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { ButtonDefault } from "../../components/Buttons/ButtonDefault";
import { MenuItem } from "../../components/Menu/MenuItem";

export const LoginMenu: React.FC = () => {
  const auth = useAuth();

  return (
    <>
      {!!auth.usuarioLogado && 
        <div>          
              <small>Bem vindo {auth.usuarioLogado.email}!</small>
              <ButtonDefault value="Sair"  type={"button"} onClick={() => auth.deslogar()} />
        </div>
      }
      {!auth.usuarioLogado && (
        <>
            <MenuItem to="/registro">Cria sua conta</MenuItem>            
            <MenuItem to="/login">Login</MenuItem>
          
        </>
      )}
    </>
  );
};
