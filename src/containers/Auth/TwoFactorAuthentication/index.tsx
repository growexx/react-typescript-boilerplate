import { useCallback } from "react";

import { Form } from "antd";
import { Helmet } from "react-helmet";

import OtpComponent from "../../../components/OtpComponent";
import { AUTH_TYPE } from "../constants";
import AuthSideContainer from "../index";
import { StyledAuthContainer } from "../StyledAuthContainer";
import { OTP_LENGTH } from "./constants";
import { use2FALogin } from "./hooks";
import { StyledTwoFactorAuthentication } from "./StyledTwoFactorAuthentication";

export function TwoFactorAuthentication() {
  const [form] = Form.useForm();
  const { loading, verifyOTP } = use2FALogin();

  const onValuesChange = useCallback(
    async (change) => {
      if (change?.otp && change.otp.length === OTP_LENGTH) {
        await verifyOTP(change.otp);
      }
    },
    [verifyOTP]
  );

  return (
    <div>
      <Helmet>
        <title>TwoFactorAuthentication</title>
        <meta
          name="description"
          content="Description of TwoFactorAuthentication"
        />
      </Helmet>
      <StyledAuthContainer>
        <AuthSideContainer authType={AUTH_TYPE[0]} />
        <StyledTwoFactorAuthentication>
          <Form form={form} onValuesChange={onValuesChange}>
            <p className="twoFactorAuthenticationTitle">
              Two Factor Authentication
            </p>
            <Form.Item name="otp">
              <OtpComponent
                isDisabled={loading}
                onChange={(val) => {
                  form.setFieldValue("otp", val);
                }}
                numInputs={OTP_LENGTH}
              />
            </Form.Item>
          </Form>
        </StyledTwoFactorAuthentication>
      </StyledAuthContainer>
    </div>
  );
}

export default TwoFactorAuthentication;
