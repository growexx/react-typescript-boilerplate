import { Helmet } from "react-helmet";
import { useRoutes } from "react-router-dom";
import styled from "styled-components";

import GlobalStyle from "../../styles/global-styles";
import ForgotPassword from "../Auth/ForgotPassword/Loadable";
import Login from "../Auth/Login/Loadable";
import Logout from "../Auth/Logout/Loadable";
import Registration from "../Auth/Registration/Loadable";
import TwoFactorAuthentication from "../Auth/TwoFactorAuthentication/Loadable";
import { ROUTES } from "../constants";
import FeaturePage from "../FeaturePage";
import { FAV_ICONS } from "./constants";
import PrivateRoute from "./PrivateRoute";

const AppWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

export const routes = [
  { path: ROUTES.LOGIN, element: <Login /> },
  { path: ROUTES.REGISTER, element: <Registration /> },
  { path: ROUTES.FORGOT_PASSWORD, element: <ForgotPassword /> },
  { path: ROUTES.LOGOUT, element: <Logout /> },
  {
    path: ROUTES.TWO_FACTOR_AUTHENTICATION,
    element: <TwoFactorAuthentication />,
  },
  {
    path: ROUTES.HOME,
    element: (
      <PrivateRoute>
        <FeaturePage />
      </PrivateRoute>
    ),
  },
];

const Routes = () => {
  return useRoutes([...routes]);
};

export default function App() {
  return (
    <AppWrapper data-testid="AppRoutes">
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
        {FAV_ICONS.map((favIcon, index) => (
          <link {...favIcon} key={index} />
        ))}
      </Helmet>
      <Routes />
      <GlobalStyle />
    </AppWrapper>
  );
}
