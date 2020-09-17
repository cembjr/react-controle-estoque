import { BaseService } from "./BaseService";
import { AxiosResponse } from "axios";

export interface Login {
  email: string;
  senha: string;
}
export interface UsuarioRegistro {
  email: string;
  senha: string;
  senhaConfirmacao: string;
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

export class LoginService extends BaseService {
  constructor() {
    super("https://localhost:44398/api/identidade/");
  }

  public logar(login: Login): Promise<AxiosResponse<LoginResponse>> {
    return this.post<Login, LoginResponse>("autenticar", login);
  }
  public registrar(usuarioRegistro: UsuarioRegistro): Promise<AxiosResponse<LoginResponse>>{
      return this.post<UsuarioRegistro, LoginResponse>('registrar', usuarioRegistro);
  }
}
