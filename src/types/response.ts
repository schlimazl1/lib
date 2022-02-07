export type AxiosResponseHeaders = Record<string, string> & {
  'set-cookie'?: string[]
};

export interface AxiosResponseTransformer {
  // headers 有 set-cookie 提示
  (data: any, headers?: AxiosResponseHeaders): any;
}
