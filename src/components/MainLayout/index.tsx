import React from "react";

import { Spin } from "antd";

import App from "../../containers/App";
import { EMITTER_EVENTS } from "../../utils/constants";
import Emitter from "../../utils/events";
import { userExists } from "../../utils/userExists";
import { LAYOUT_CONFIG } from "../constants";
import Layouts from "./Layout";
import { StyledMainLayout } from "./StyledMainLayout";

interface IProp {
  appLoading?: boolean;
}

interface IState {
  collapsed: boolean;
  layoutVariant: number;
}

// TODO
class MainLayout extends React.Component<IProp, IState> {
  constructor(props) {
    super(props);
    // TODO
    // const urlParams = new URLSearchParams(props.location.search);
    // const layoutVariant = urlParams.get("layout")
    //   ? +urlParams.get("layout")
    //   : props.defaultLayout;
    this.state = {
      collapsed: ![LAYOUT_CONFIG.VERTICAL_OPTION_2].includes(1),
      layoutVariant: 1,
    };
  }

  toggle = () => {
    const { collapsed } = this.state;
    this.setState({
      collapsed: !collapsed,
    });
  };

  componentDidMount() {
    Emitter.on(EMITTER_EVENTS.LOG_IN, () => {
      this.forceUpdate();
    });
    Emitter.on(EMITTER_EVENTS.LOG_OUT, () => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    Emitter.off(EMITTER_EVENTS.LOG_IN);
    Emitter.off(EMITTER_EVENTS.LOG_OUT);
  }

  render() {
    const { appLoading = false } = this.props;
    const { layoutVariant, collapsed } = this.state;

    if (userExists()) {
      return (
        <Spin spinning={appLoading} size="default">
          <StyledMainLayout
            data-environment={
              process.env.NODE_ENV !== "production"
                ? process.env.NODE_ENV
                : null
            }
            className="main-layout"
          >
            <Layouts
              collapsed={collapsed}
              layoutVariant={layoutVariant}
              toggle={this.toggle}
            />
          </StyledMainLayout>
        </Spin>
      );
    }

    return <App />;
  }
}

export default MainLayout;
