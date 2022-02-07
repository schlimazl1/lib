import { AxiosRequestConfig } from './axios'
import { AxiosRequestHeaders } from './request'

export interface HeadersDefaults {
  common: AxiosRequestHeaders
  delete: AxiosRequestHeaders
  get: AxiosRequestHeaders
  head: AxiosRequestHeaders
  post: AxiosRequestHeaders
  put: AxiosRequestHeaders
  patch: AxiosRequestHeaders
  options?: AxiosRequestHeaders
  purge?: AxiosRequestHeaders
  link?: AxiosRequestHeaders
  unlink?: AxiosRequestHeaders
}

export interface AxiosDefaults<D = any> extends Omit<AxiosRequestConfig<D>, 'headers'> {
  headers: HeadersDefaults
}