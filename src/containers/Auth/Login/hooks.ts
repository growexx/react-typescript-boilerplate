import { useState } from "react";

import { message } from "antd";
import { useNavigate } from "react-router";
import sha256 from "sha256";

import { EMITTER_EVENTS } from "../../../utils/constants";
import Emitter from "../../../utils/events";
import { ROUTES } from "../../constants";
import { loginAPI } from "./api";
import { IPayload, IUseLoginReturn } from "./interface";

export const useLogin = (): IUseLoginReturn => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const login = async (credentials: IPayload) => {
    setLoading(true);
    const payload: IPayload = {
      email: credentials.email,
      password: sha256(credentials.password),
    };

    try {
      const log = await loginAPI(payload);
      if (log.status === 1) {
        // StorageService.set(TOKEN_KEY, log.data.token);
        // StorageService.set(USER_DATA_KEY, log.data);
        navigate(ROUTES.TWO_FACTOR_AUTHENTICATION);
        Emitter.emit(EMITTER_EVENTS.LOG_IN);
      } else {
        message.error(log.message);
      }
    } catch (err: any) {
      message.error(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    login,
    loading,
  };
};
