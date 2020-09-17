import React, { createContext, useCallback, useContext, useState } from "react";
import { ProdutoService, Produto } from "../Services/ProdutoService";

interface ProdutoContextData {
  cadastrar(nome: string, descricao: string, valor: number): void;
  produtos: Produto[];
  listar(): void;
}

const ProdutoContext = createContext<ProdutoContextData>(
  {} as ProdutoContextData
);

export const ProdutoProvider: React.FC = ({ children }) => {
  const [produtoService] = useState(new ProdutoService());
  const [produtos, setProdutos] = React.useState<Produto[]>([]);

  const listar = useCallback(async () => {
    const prods = (await produtoService.listar()).data;
    setProdutos(prods);
  }, [produtoService]);

  const cadastrar = useCallback(
    (nome: string, descricao: string, valor: number): void => {
      produtoService
        .adicionar(nome, descricao, valor)
        .then(() => console.log("produto adicionado com sucesso"))
        .catch((err) => console.log(err));
    },
    [produtoService]
  );

  return (
    <>
      <ProdutoContext.Provider
        value={{
          cadastrar,
          listar,
          produtos,
        }}
      >
        {children}
      </ProdutoContext.Provider>
    </>
  );
};

export function useProduto(): ProdutoContextData {
  const context = useContext(ProdutoContext);

  if (!context)
    throw new Error(
      "produtoContext deve ser usado dentro de um ProdutoProvider!"
    );

  return context;
}
