import React from "react";

import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

import App from "../../containers/App";
import { ROUTES } from "../../containers/constants";
import GrowExxTriangleLogo from "../../images/Growexx-Triangle-White.png";
import GrowExxLogo from "../../images/GrowExx_Group_Logo.png";
import { getUserData } from "../../utils/Helper";
import Footer from "../Footer";
import AppHeader from "../Header";
import SideBar from "../SideBar";
import { GET_FILTERED_MENU_ITEM } from "../SideBar/constants";
import { ToggleBreadCrumb } from "./StyledMainLayout";
const { Header, Content } = Layout;

// TODO: replace with functional component
interface IProps {
  layoutVariant: number;
  collapsed: boolean;
  toggle: () => void;
  user?: any;
  location?: any;
}

const LogoContainer = styled.div`
  background: #190426;
  flex: 0 0 200px;
  max-width: 200px;
  min-width: 200px;
  width: 200px;
  text-align: center;
`;

const HeaderMenu = styled(Menu)`
  display: flex;
  align-items: center;
`;

const HeaderMenuItem = styled(Menu.Item)`
  margin: 0 !important;
  width: fit-content !important;
`;

// TODO
class Layouts extends React.PureComponent<IProps> {
  render() {
    const { layoutVariant, collapsed, toggle } = this.props;
    // eslint-disable-next-line default-case
    switch (layoutVariant) {
      case 2:
        return (
          <Layout>
            <Header className="headerLayout">
              <LogoContainer className="logo">
                <Link to={ROUTES.HOME}>
                  {!collapsed ? (
                    <img src={GrowExxLogo} alt="logo" />
                  ) : (
                    <img src={GrowExxTriangleLogo} alt="logo" />
                  )}
                </Link>
              </LogoContainer>
              <AppHeader />
            </Header>
            <Layout className="site-layout">
              <SideBar
                collapsed={collapsed}
                user={getUserData()}
                layoutVariant={layoutVariant}
              />
              <Content
                className="site-layout-background"
                style={{
                  margin: "24px 16px",
                  padding: 24,
                  minHeight: 280,
                }}
              >
                <App />
              </Content>
            </Layout>
            <Footer />
          </Layout>
        );
      case 3:
        return (
          <Layout>
            <Header className="headerLayout">
              <LogoContainer className="logo">
                <Link to={ROUTES.HOME}>
                  {<img src={GrowExxLogo} alt="logo" />}
                </Link>
              </LogoContainer>
              <HeaderMenu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={[this.props.location.pathname]}
                selectedKeys={[this.props.location.pathname]}
              >
                {GET_FILTERED_MENU_ITEM(
                  this.props.user && this.props.user.role
                ).map((menu) => (
                  <HeaderMenuItem key={menu.to} icon={menu.icon}>
                    <Link to={menu.to} />
                  </HeaderMenuItem>
                ))}
              </HeaderMenu>
              <AppHeader menuBackground />
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
              }}
            >
              <App />
            </Content>
            <Footer />
          </Layout>
        );
      default:
        return (
          <Layout>
            <SideBar
              collapsed={collapsed}
              user={getUserData()}
              layoutVariant={layoutVariant}
            />
            <Layout className="site-layout">
              <Header className="headerLayout">
                <ToggleBreadCrumb>
                  <span
                    className="sideBarTrigger"
                    onClick={toggle}
                    data-testid="ToggleIcon"
                    onKeyDown={toggle}
                    role="button"
                    tabIndex={0}
                    aria-label="Navigation Toggle"
                  >
                    {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                  </span>
                </ToggleBreadCrumb>
                <AppHeader />
              </Header>
              <Content
                className="site-layout-background"
                style={{
                  margin: "24px 16px",
                  padding: 24,
                  minHeight: 280,
                }}
              >
                <App />
              </Content>
              <Layout className="site-layout">
                <Footer />
              </Layout>
            </Layout>
          </Layout>
        );
    }
  }
}

export default Layouts;
