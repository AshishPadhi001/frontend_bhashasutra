import axios, { AxiosRequestConfig } from 'axios';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, 
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setAuthToken = (token: string | null) => {
  if (token) {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axiosInstance.defaults.headers.common['Authorization'];
  }
};

export const ApiGet = async <T>(
  url: string,
  config: AxiosRequestConfig = {}
): Promise<T> => {
  const response = await axiosInstance.get(url, config);
  return response.data;
};

export const ApiPost = async <T>(
  url: string,
  data: object,
  config: AxiosRequestConfig = {}
): Promise<T> => {
  const response = await axiosInstance.post(url, data, config);
  return response.data;
};
