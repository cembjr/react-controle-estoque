import api from "./api";
import { AxiosResponse } from "axios";

export abstract class BaseService<T> {
  constructor(private url: string) {}

  public api = api;

  public get(complUrl: string): Promise<AxiosResponse<T[]>> {
    return api.get<T[]>(this.url + complUrl);
  }

  public Post<T, TResp>(
    complUrl: string,
    ent: T
  ): Promise<AxiosResponse<TResp>> {
    return api.post(this.url + complUrl, ent);
  }

}
