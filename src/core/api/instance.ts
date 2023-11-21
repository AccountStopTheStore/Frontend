import axios, { AxiosRequestConfig } from "axios";

/** TODO: GET 요청 */
const API_BASE_URL = "https://asts.cozybinarybase.com:8443";

/** COMPLETED: 1. instance 만들기 */
const createAPIInstance = (config: AxiosRequestConfig) => {
  const instance = axios.create({
    ...config,
  });

  return instance;
};

/** COMPLETED: APIInstance */
const APIInstance = createAPIInstance({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

/** COMPLETED: AuthAPIInstance */
const AuthAPIInstance = createAPIInstance({
  baseURL: API_BASE_URL + "/oauth2/authorization/google",
});

export { APIInstance, AuthAPIInstance };
