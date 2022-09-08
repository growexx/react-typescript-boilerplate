import { render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router";

import Logout from "..";
import { EMITTER_EVENTS } from "../../../../utils/constants";
import Emitter from "../../../../utils/events";

const setup = () =>
  render(
    <Router>
      <Logout />
    </Router>
  );

describe("<Logout />", () => {
  test("Should render and match the snapshot", () => {
    const {
      container: { firstChild },
    } = setup();
    expect(firstChild).toMatchSnapshot();
  });

  test("Should emit logout event", () => {
    const logoutEvent = jest.fn();
    Emitter.on(EMITTER_EVENTS.LOG_OUT, logoutEvent);
    setup();
    expect(logoutEvent.mock.calls.length).toBe(1);
  });
});
