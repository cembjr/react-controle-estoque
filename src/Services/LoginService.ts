import { BaseService } from "./BaseService";
import { AxiosResponse } from "axios";

export interface Login {
  email: string;
  senha: string;
}

export interface LoginResponse {
  accessToken: string;
  expiresIn: number;
  usuarioToken: UsuarioToken;
}

export interface UsuarioToken {
  id: string;
  email: string;
  claims: { chave: string; valor: string }[];
}

export class LoginService extends BaseService<Login> {
  constructor() {
    super("api/identidade/");
  }

  public logar(login: Login): Promise<AxiosResponse<LoginResponse>> {
    return this.Post<Login, LoginResponse>("autenticar", login);
  }
}
