import { fireEvent, render, act } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router";

import { loginAPI } from "../api";
import Login from "../index";

jest.mock("../api", () => ({
  ...jest.requireActual("../api"),
  loginAPI: jest.fn(),
}));

const setup = () =>
  render(
    <Router>
      <Login />
    </Router>
  );

describe("<Login />", () => {
  test("Should render and match the snapshot", () => {
    const {
      container: { firstChild },
    } = setup();
    expect(firstChild).toMatchSnapshot();
  });

  test("Should show login form", () => {
    const { queryByTestId } = setup();
    expect(queryByTestId("login-form")).toBeInTheDocument();
  });

  test("Should show error if email and password was not added", async () => {
    const { queryByTestId, getByText, queryAllByRole } = setup();
    expect(queryByTestId("log-in")).toBeInTheDocument();

    await act(() => {
      fireEvent.click(queryByTestId("log-in"));
    });
    const alerts = queryAllByRole("alert");
    expect(alerts.length).toBe(2);
    expect(getByText("Please input your E-mail!")).toBeVisible();
    expect(getByText("Please input your password!")).toBeVisible();
  });

  test("User should be able to login using valid credentials", async () => {
    const { queryByTestId, getByText, queryAllByRole } = setup();
    expect(queryByTestId("log-in")).toBeInTheDocument();
    (loginAPI as jest.Mock).mockResolvedValue({
      status: 1,
      message: "Successful login",
      data: {
        token: "Test token",
        id: "test id",
      },
    });
    await act(() => {
      fireEvent.change(queryByTestId("email"), {
        target: { value: "john@doe.test" },
      });
      fireEvent.change(queryByTestId("password"), {
        target: { value: "Test@123" },
      });
    });

    await act(() => {
      fireEvent.click(queryByTestId("log-in"));
    });
    const alerts = queryAllByRole("alert");
    expect(alerts.length).toBe(0);
    expect((loginAPI as jest.Mock).mock.calls.length).toBe(1);
  });

  test("User should get error with invalid credentials", async () => {
    const { queryByTestId, getByText, queryAllByRole } = setup();
    expect(queryByTestId("log-in")).toBeInTheDocument();
    (loginAPI as jest.Mock).mockResolvedValue({
      status: 0,
      message: "User credentials are wrong",
    });
    await act(() => {
      fireEvent.change(queryByTestId("email"), {
        target: { value: "john@doe.test" },
      });
      fireEvent.change(queryByTestId("password"), {
        target: { value: "Test@123" },
      });
    });

    await act(() => {
      fireEvent.click(queryByTestId("log-in"));
    });
    const alerts = queryAllByRole("alert");
    expect(alerts.length).toBe(0);
    expect((loginAPI as jest.Mock).mock.calls.length).toBe(1);
    expect(getByText("User credentials are wrong")).toBeVisible();
  });

  test("User should get error when server fails api call", async () => {
    const { queryByTestId, getByText, queryAllByRole } = setup();
    expect(queryByTestId("log-in")).toBeInTheDocument();
    (loginAPI as jest.Mock).mockRejectedValue("Bad Gateway");
    await act(() => {
      fireEvent.change(queryByTestId("email"), {
        target: { value: "john@doe.test" },
      });
      fireEvent.change(queryByTestId("password"), {
        target: { value: "Test@123" },
      });
    });

    await act(() => {
      fireEvent.click(queryByTestId("log-in"));
    });
    const alerts = queryAllByRole("alert");
    expect(alerts.length).toBe(0);
    expect((loginAPI as jest.Mock).mock.calls.length).toBe(1);
    expect(getByText("Bad Gateway")).toBeVisible();
  });
});
