/* eslint-disable space-before-function-paren */

import { Navigate } from "react-router";

import { userExists } from "../../utils/userExists";
import { ROUTES } from "../constants";
const PrivateRoute = ({ children }: any) => {
  return userExists() ? children : <Navigate to={ROUTES.LOGIN} />;
};
export default PrivateRoute;
