import { IPayload } from "./interface";

// TODO
export const loginAPI = (payload: IPayload): Promise<any> => {
  const data = {
    method: "POST",
    body: payload,
  };

  return new Promise((resolve) => {
    resolve({
      status: 1,
      message: "Successful login",
      data: {
        token: "Test token",
        id: "test id",
      },
    });
  });
}