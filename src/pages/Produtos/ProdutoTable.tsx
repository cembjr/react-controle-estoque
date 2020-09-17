import React from "react";
import { Table } from "../../components/Tabela";
import { Produto } from "../../Services/ProdutoService";
import {  } from '../../Prototypes/formatarNumero';

interface ProdutoTableProps{
    produtos: Produto[];
}
export const ProdutosTable: React.FC<ProdutoTableProps> = ({ produtos }) => {
  return (
    <>
      <h1>Produtos</h1>
      <Table colunas={["Nome", "Em Estoque", "Valor"]} hiddenButtons>
        {produtos && produtos.map((produto) => (
          <tr key={produto.id}>
            <td>{produto.nome}</td>
            <td>
              {produto.quantidadeEmEstoque.format()}
            </td>
            <td>{produto.valor.formatMoeda()}</td>
          </tr>
        ))}
      </Table>
    </>
  );
};
