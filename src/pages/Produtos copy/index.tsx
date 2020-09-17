import React from "react";
import { useProduto } from '../../Context/ProdutoContext';
import { ProdutoForm } from "../Produtos/ProdutoForm";
import { ProdutosTable } from "../Produtos/ProdutoTable";

export const ProdutosPage: React.FC = () => {
  
  const prodContext = useProduto();

  React.useEffect(() => {
    prodContext.listar();
  }, [prodContext]);

  return (
    <>
        <ProdutoForm />
        <ProdutosTable produtos={prodContext.produtos} />      
    </>
  );
};
