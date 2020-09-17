import React, { useCallback } from "react";
import { Input } from "../../components/Input/Input";
import { ButtonDefault } from "../../components/Buttons/ButtonDefault";
import { useProduto } from "../../Context/ProdutoContext";
import { Card } from "../../components/Card";

export const ProdutoForm: React.FC = () => {
  const [form, setForm] = React.useState({
    id: "",
    nome: "",
    descricao: "",
    valor: 0,
  });

  const produtoContext = useProduto();

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = evt.target;
    setForm({ ...form, [id]: value });
  };

  const limpar = useCallback(
    () =>
      setForm({
        id: "",
        nome: "",
        descricao: "",
        valor: 0,
      }),
    []
  );

  const handleClick = () => {
    const { nome, descricao, valor } = form;
    produtoContext.cadastrar(nome, descricao, valor);
    produtoContext.listar();
    limpar();
  };

  return (
    <>
      <Card titulo="Cadastro de Produtos">
        <Input
          id="nome"
          label="Nome"
          onChange={handleChange}
          value={form.nome}
        />
        <Input
          id="descricao"
          label="Descrição"
          onChange={handleChange}
          value={form.descricao}
        />
        <Input
          id="valor"
          label="Valor"
          onChange={handleChange}
          value={form.valor}
        />
        <ButtonDefault value="Salvar" type="button" onClick={handleClick} />
      </Card>
    </>
  );
};
