import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

/** base api url */
export const getBaseUrl = () => 'http://localhost:3000';

const instance = Axios.create({
  baseURL: `${getBaseUrl()}/api`,
  timeout: 5000
});

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const new_config = { ...config };
    return new_config;
  },

  (error) => {
    console.error(error); // for debug
    Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response: AxiosResponse): any | Promise<string> => response,

  (error) => {
    console.error(error); // for debug
    Promise.reject(error);
  }
);

export default instance;
