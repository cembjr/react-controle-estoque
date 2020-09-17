import React, { useCallback, useEffect } from "react";
import { ProdutosTable } from "./ProdutoTable";
import { ProdutoForm } from "./ProdutoForm";
import { useProduto } from "../../Context/ProdutoContext";

export const ProdutosMain: React.FC = () => {
  const prodContext = useProduto();
  
  const listar = useCallback(() => {
    prodContext.listar();
  },[prodContext]);

  useEffect(listar,[]);

  return (
    <>
      <ProdutoForm />
      <ProdutosTable produtos={prodContext.produtos} />
    </>
  );
};
