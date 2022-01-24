import Axios from './settings';
import type { AxiosRequestConfig } from 'axios';

export type Reponse<T> = {
  code: number;
  data: T;
  msg: string;
};

class Request {
  async get<R = any>(url: string, config?: AxiosRequestConfig) {
    return (await Axios.get<Reponse<R>>(url, config)).data;
  }

  async post<R = any>(url: string, data?: any, config?: AxiosRequestConfig) {
    return (await Axios.post<Reponse<R>>(url, data, config)).data;
  }

  async put<R = any>(url: string, data?: any, config?: AxiosRequestConfig) {
    return (await Axios.put<Reponse<R>>(url, data, config)).data;
  }

  async delete<R = any>(url: string, config?: AxiosRequestConfig) {
    return (await Axios.delete<Reponse<R>>(url, config)).data;
  }
}

export default new Request();
