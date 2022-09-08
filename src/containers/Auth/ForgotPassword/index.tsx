import { useState } from "react";

import { UserOutlined } from "@ant-design/icons";
import { notification, Form, Input, Button } from "antd";
import { Link } from "react-router-dom";

import request from "../../../utils/request";
import { API_ENDPOINTS, ROUTES } from "../../constants";
import { AUTH_TYPE } from "../constants";
import AuthSideContainer from "../index";
import { StyledAuthContainer } from "../StyledAuthContainer";
import { TEST_IDS } from "./stub/test.stub";
import { StyledForgotPassword } from "./StyledForgotPassword";

export default function ForgotPassword(): JSX.Element {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);

  const onFinish = (values) => {
    setLoading(true);
    // API Call
    request(`${API_ENDPOINTS.FORGOT_PASSWORD}`, {
      method: "POST",
      body: { email: values.email },
    })
      .then((res) => {
        notification.success(res.message);
        setLoading(false);
      })
      .catch(async (err) => {
        setLoading(false);
        notification.error((await err.response.json()).message);
      });
  };

  return (
    <StyledAuthContainer>
      <AuthSideContainer authType={AUTH_TYPE[0]} />
      <StyledForgotPassword>
        <p className="forgotPassword">Reset Password</p>
        <div className="LoginSubContainer">
          <div className="accountData">
            <Form form={form} onFinish={onFinish} name="control-ref">
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
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Email"
                />
              </Form.Item>
              <Form.Item shouldUpdate>
                {() => (
                  <Button
                    data-testid={TEST_IDS.RESET_PASSWORD}
                    loading={loading}
                    type="primary"
                    htmlType="submit"
                    disabled={
                      !form.isFieldsTouched(true) ||
                      !!form
                        .getFieldsError()
                        .filter(({ errors }) => errors.length).length
                    }
                  >
                    Reset
                  </Button>
                )}
              </Form.Item>
            </Form>
            <Link to={ROUTES.LOGIN}>Login?</Link>
          </div>
        </div>
      </StyledForgotPassword>
    </StyledAuthContainer>
  );
}
