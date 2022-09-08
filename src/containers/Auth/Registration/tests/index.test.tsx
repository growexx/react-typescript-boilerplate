import { render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router";

import Registration from "../index";

const setup = () =>
  render(
    <Router>
      <Registration />
    </Router>
  );

describe("<Registration />", () => {
  test("Should render and match the snapshot", () => {
    const {
      container: { firstChild },
    } = setup();
    expect(firstChild).toMatchSnapshot();
  });

  test("Should show registration form", () => {
    const { queryByTestId, getByText } = setup();
    expect(queryByTestId("registration-form")).toBeInTheDocument();
    expect(getByText("Create Account")).toBeInTheDocument();
  });
});
