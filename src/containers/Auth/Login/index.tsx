import { useCallback } from "react";

import {
  FacebookFilled,
  GoogleOutlined,
  WindowsFilled,
} from "@ant-design/icons";
import { Form, Input, Button } from "antd";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import { ROUTES } from "../../constants";
import { AUTH_TYPE } from "../constants";
import AuthSideContainer from "../index";
import { StyledAuthContainer } from "../StyledAuthContainer";
import { useLogin } from "./hooks";
import { IPayload } from "./interface";
import { StyledLogin } from "./StyledLogin";

export function Login(): JSX.Element {
  const { login } = useLogin();
  const [form] = Form.useForm();
  const onSubmit = useCallback(
    (formValues: IPayload) => {
      login(formValues);
    },
    [login]
  );

  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Description of Login" />
      </Helmet>
      <Form onFinish={onSubmit} form={form} data-testid="login-form">
        <StyledAuthContainer>
          <AuthSideContainer authType={AUTH_TYPE[0]} />
          <StyledLogin>
            <p className="createAccount">Account Details</p>
            <div className="LoginSubContainer">
              <div className="socialIcons">
                <FacebookFilled />
                <GoogleOutlined />
                <WindowsFilled />
              </div>
              <p className="emailLogin">or use your email for Login</p>
              <div className="accountData">
                <Form.Item
                  name="email"
                  rules={[
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!",
                    },
                  ]}
                >
                  <Input placeholder="Email" type="email" data-testid="email" />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password
                    placeholder="Password"
                    type="password"
                    data-testid="password"
                  />
                </Form.Item>
              </div>
              <Form.Item>
                <Button htmlType="submit" data-testid="log-in">
                  SIGN IN
                </Button>
              </Form.Item>
            </div>
            <Link to={ROUTES.FORGOT_PASSWORD}>Forgot Password?</Link>
          </StyledLogin>
        </StyledAuthContainer>
      </Form>
    </>
  );
}
export default Login;
