export interface AxiosInterceptorManager<V> {
  use<T = V>(onFulfilled?: (value: V) => T | Promise<T>, onRejected?: (error: any) => any): number
  eject(id: number): void
}

class InterceptorManager {
  handlers = []

  use (fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled: fulfilled, // 成功的回调
      rejected: rejected, // 失败的回调
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    })
    return this.handlers.length - 1
  }
}

export default InterceptorManager
