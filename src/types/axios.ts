import { Method, responseEncoding } from './const'
import { AxiosRequestTransformer, AxiosRequestHeaders } from './request'
import { AxiosResponseTransformer, AxiosResponseHeaders } from './response'
import { AxiosBasicCredentials } from './auth'
import { AxiosProxyConfig } from './proxy'
import { CancelToken } from './cancelToken'
import { TransitionalOptions } from './transitionOptions'

export interface AxiosResponse<T = any, D = any>  {
  data: T;
  status: number;
  statusText: string;
  headers: AxiosResponseHeaders;
  config: AxiosRequestConfig<D>;
  request?: any;
}

export interface AxiosPromise<T = any> extends Promise<AxiosResponse<T>> {}

export interface AxiosAdapter {
  (config: AxiosRequestConfig): AxiosPromise;
}

export interface AxiosRequestConfig<D = any> {
  url?: string
  method?: Method
  baseURL?: string
  transformRequest?: AxiosRequestTransformer | AxiosRequestTransformer[]
  transformResponse?: AxiosResponseTransformer | AxiosResponseTransformer[]
  headers?: AxiosRequestHeaders
  params?: any
  paramsSerializer?: (params: any) => string
  data?: D
  timeout?: number
  timeoutErrorMessage?: string
  withCredentials?: boolean
  adapter?: AxiosAdapter
  auth?: AxiosBasicCredentials
  responseType?: ResponseType;
  responseEncoding?: responseEncoding | string
  xsrfCookieName?: string
  xsrfHeaderName?: string
  onUploadProgress?: (progressEvent: any) => void
  onDownloadProgress?: (progressEvent: any) => void
  maxContentLength?: number
  validateStatus?: ((status: number) => boolean) | null
  maxBodyLength?: number
  maxRedirects?: number
  socketPath?: string | null
  httpAgent?: any
  httpsAgent?: any
  proxy?: AxiosProxyConfig | false
  cancelToken?: CancelToken
  decompress?: boolean
  transitional?: TransitionalOptions
  signal?: AbortSignal
  insecureHTTPParser?: boolean
}