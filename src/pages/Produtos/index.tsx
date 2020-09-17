import React from "react";
import { ProdutoProvider } from "../../Context/ProdutoContext";
import { ProdutosMain } from "./ProdutoMain";

export const ProdutosPage: React.FC = () => {
  return (
    <>
      <ProdutoProvider>
        <ProdutosMain />
      </ProdutoProvider>
    </>
  );
};
