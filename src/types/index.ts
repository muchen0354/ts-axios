export type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'Delete'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'
export interface AxiosRequestConfig {
  url: string
  method?: Method
  params?: any
  data?: any,
  headers?: any,
  timeout?: number,
  responseType?: XMLHttpRequestResponseType
}

export interface AxiosResponse {
  data: any,
  status: number,
  statusText: string,
  headers: any,
  request: any,
  config: AxiosRequestConfig
}

export interface AxiosPromise extends Promise<AxiosResponse> {
}

export interface AxiosError extends Error {
  config?: AxiosRequestConfig
  code?: string
  request?: any
  response?: AxiosResponse
  isAxiosError: boolean
}