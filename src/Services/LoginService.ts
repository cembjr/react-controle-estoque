import { BaseService } from "./BaseService";
import { AxiosResponse } from "axios";

interface Login {
  email: string;
  senha: string;
}

interface LoginResponse {
  accessToken: string;
  expiresIn: number;
  usuarioToken: {
    id: string;
    email: string;
    claims: { chave: string; valor: string }[];
  };
}

export class LoginService extends BaseService<Login> {
  constructor() {
    super("api/identidade/");
  }

  public logar(login: Login): Promise<AxiosResponse<LoginResponse>> {
    return this.Post<Login, LoginResponse>("autenticar", login);
  }
}
