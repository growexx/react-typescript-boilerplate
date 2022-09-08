import { Input, Button, Form } from "antd";
import { Helmet } from "react-helmet";

import { AUTH_TYPE } from "../constants";
import AuthSideContainer from "../index";
import { StyledAuthContainer } from "../StyledAuthContainer";
import { StyledRegistration } from "./StyledRegistration";

export function Registration() {
  return (
    <StyledAuthContainer data-testid="registration-form">
      <Helmet>
        <title>Registration</title>
        <meta name="description" content="Description of Registration" />
      </Helmet>
      <AuthSideContainer authType={AUTH_TYPE[1]} />
      <StyledRegistration>
        <p className="createAccount">Create Account</p>
        <div className="registrationSubContainer">
          <p className="emailRegistration">
            or use your email for registration
          </p>
          <div className="accountData input-margin-0">
            <Form>
              <Form.Item name="username">
                <Input placeholder="Name" />
              </Form.Item>
              <Form.Item name="email">
                <Input type="email" placeholder="email" />
              </Form.Item>

              <Form.Item name="password">
                <Input.Password type="password" placeholder="Password" />
              </Form.Item>
            </Form>
          </div>
          <Button>SIGN UP</Button>
        </div>
      </StyledRegistration>
    </StyledAuthContainer>
  );
}

export default Registration;
