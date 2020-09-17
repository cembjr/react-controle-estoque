import axios, { AxiosInstance, AxiosResponse } from "axios";
import { useAuth } from "../Context/AuthContext";

export abstract class BaseService {
  protected api: AxiosInstance;

  private auth = useAuth();

  constructor(protected url: string) {
    this.api = axios.create({
      baseURL: url,
    });
    const token = this.auth.token;
    this.api.defaults.headers.authorization = `Bearer ${token}`;
  }


  public get<T>(complUrl: string): Promise<AxiosResponse<T>> {
    return this.api.get<T>(this.url + complUrl);
  }

  public post<T, TResp>(
    complUrl: string,
    ent: T
  ): Promise<AxiosResponse<TResp>> {
    return this.api.post(this.url + complUrl, ent);
  }

}
