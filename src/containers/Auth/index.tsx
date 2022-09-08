import { Button } from "antd";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { ROUTES } from "../constants";
import { AUTH_TYPE } from "./constants";

const getLoginSideContent = () => (
  <div className="loginContainer">
    <div className="registrationSideContainer">
      <p className="title">New Here!</p>
      <p className="subTitle">
        To join us, please sign up with your personal info
      </p>
      <Link to={ROUTES.REGISTER}>
        <Button>SIGN UP</Button>
      </Link>
    </div>
  </div>
);
const getRegisterSideContent = () => (
  <div className="registrationSideContainer">
    <p className="title">Welcome Back!</p>
    <p className="subTitle">
      To keep connected with us, please log in with your personal info
    </p>
    <Link to={ROUTES.LOGIN}>
      <Button>SIGN IN</Button>
    </Link>
  </div>
);
const AuthSideContainer = (props: any) => (
  <div className="sideContainer">
    {props.authType === AUTH_TYPE[0]
      ? getLoginSideContent()
      : getRegisterSideContent()}
  </div>
);

export default AuthSideContainer;

AuthSideContainer.propTypes = {
  authType: PropTypes.string,
};
