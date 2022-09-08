import { useState } from "react"

import { useNavigate } from "react-router";

import { TOKEN_KEY, USER_DATA_KEY, EMITTER_EVENTS } from "../../../utils/constants";
import Emitter from "../../../utils/events";
import StorageService from "../../../utils/StorageService";
import { ROUTES } from "../../constants";
import { loginSuccessResponse } from "../Login/stub/login.stub";
import { IUse2FALoginReturn } from "./interface";

const delay = (time: number): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(resolve, time)
    });
}

export const use2FALogin = (): IUse2FALoginReturn => {
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate()

    const verifyOTP = async (otp: string) => {
        setLoading(true);
        // API CALL
        await delay(2000);
        StorageService.set(TOKEN_KEY, loginSuccessResponse.data.token);
        StorageService.set(USER_DATA_KEY, loginSuccessResponse.data);
        navigate(ROUTES.HOME)
        Emitter.emit(EMITTER_EVENTS.LOG_IN);
        setLoading(false);
    }

    return {
        loading,
        verifyOTP,
    }
}