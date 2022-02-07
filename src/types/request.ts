// Record 后面的泛型就是对象键和值的类型
// { string: string | number | boolean }
export type AxiosRequestHeaders = Record<string, string | number | boolean>;


export interface AxiosRequestTransformer {
  (data: any, headers?: AxiosRequestHeaders): any
}
