export interface AxiosProxyConfig {
  host: string
  port: number
  auth?: {
    username: string
    password: string
  }
  protocol?: string
}
