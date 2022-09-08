export interface IUse2FALoginReturn {
    loading: boolean;
    verifyOTP: (otp: string) => Promise<void>;
}