export interface Cancel {
  message: string | undefined;
}

export interface CancelToken {
  promise: Promise<Cancel>
  reason?: Cancel
  throwIfRequested(): void
}
