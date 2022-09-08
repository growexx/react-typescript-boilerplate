/* eslint-disable react/no-array-index-key */
import PropTypes from "prop-types";

import Avatar from "../Avatar";
import Notification from "../Notification";
import { MenuItems } from "./constants";
import {
  StyledAppHeader,
  AvatarWrapper,
  StyledAppHeaderColored,
} from "./StyledAppHeader";

const Header = (props) =>
  props.menuBackground ? (
    <StyledAppHeaderColored {...props}>
      <AvatarWrapper>
        {/* TODO */}
        {/* <Cart /> */}
        <Notification />
        <Avatar menu={MenuItems} />
      </AvatarWrapper>
    </StyledAppHeaderColored>
  ) : (
    <StyledAppHeader {...props}>
      <AvatarWrapper>
        {/* <Cart /> */}
        <Notification />
        <Avatar menu={MenuItems} />
      </AvatarWrapper>
    </StyledAppHeader>
  );

Header.propTypes = {
  menuBackground: PropTypes.bool,
};
export default Header;
