import React, { useEffect } from "react";

import { useNavigate } from "react-router";

import { EMITTER_EVENTS } from "../../../utils/constants";
import Emitter from "../../../utils/events";
import StorageService from "../../../utils/StorageService";
import { ROUTES } from "../../constants";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    StorageService.clear();
    Emitter.emit(EMITTER_EVENTS.LOG_OUT);
    navigate(ROUTES.LOGIN);

    return () => {
      Emitter.off(EMITTER_EVENTS.LOG_OUT);
    };
  }, [navigate]);

  return <React.Fragment />;
};

export default Logout;
