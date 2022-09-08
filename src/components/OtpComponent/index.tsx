import OtpInput, { OtpInputProps } from "react-otp-input";

import { StyledOtpComponent } from "./StyledOtpComponent";

export default function OtpComponent(props: OtpInputProps) {
  return (
    <StyledOtpComponent>
      <OtpInput {...props} />
    </StyledOtpComponent>
  );
}

OtpComponent.defaultProps = {
  separator: <span>-</span>,
  numInputs: 6,
  placeholder: "000000",
  isDisabled: false,
  hasErrored: false,
  shouldAutoFocus: true,
  isInputNum: true,
  isInputSecure: false,
  inputStyle: "otpComponentInputStyle",
  containerStyle: "otpComponentContainerStyle",
  focusStyle: "otpComponentFocusStyle",
  disabledStyle: "otpComponentDisabledStyle",
  errorStyle: "otpComponentErrorStyle",
};
