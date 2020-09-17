import { BaseService } from "./BaseService";
import { AxiosResponse } from "axios";

export interface Produto {
  id: string;
  nome: string;
  descricao: string;
  valor: number;
  quantidadeEmEstoque: number;
}

export class ProdutoService extends BaseService {
  constructor() {
    super("https://localhost:44305/api/produtos/");
  }

  public listar(): Promise<AxiosResponse<Produto[]>> {
    return this.get<Produto[]>("listar-produtos");
  }
  public obter(id: string): Promise<AxiosResponse<Produto>> {
    return this.get<Produto>(`obter-produto/${id}`);
  }

  public adicionar(
    nome: string,
    descricao: string,
    valor: number
  ): Promise<AxiosResponse<any>> {
    console.log({ nome, descricao, valor });
    console.log(this.api.defaults);

    return this.api.post(
      "adicionar-novo-produto",
      new produtoadicionar(nome, descricao, valor)
    );
  }
}

class produtoadicionar {
  constructor(
    public nome: string,
    public descricao: string,
    public valor: number
  ) {}
}
