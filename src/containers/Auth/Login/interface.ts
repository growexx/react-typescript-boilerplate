export interface IPayload {
  email: string;
  password: string;
}

export interface IUseLoginReturn {
  login: (credentials: IPayload) => Promise<void>
  loading: boolean;
}