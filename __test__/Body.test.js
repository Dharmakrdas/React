import {
  act,
  fireEvent,
  render,
  renderHook,
  screen,
} from "@testing-library/react";
import Body from "../src/Body";
import BodyMocks from "../src/mocks/Body-mock-data.json";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import useOnlineStatus from "../src/Hooks/useOnlineStatus";

// This is the section where we mock `fetch`
const unmockedFetch = global.fetch;

beforeAll(() => {
  global.fetch = () =>
    Promise.resolve({
      json: () => Promise.resolve([]),
    });
});

afterAll(() => {
  global.fetch = unmockedFetch;
});

// This is actual testing suite
describe("withFetch", () => {
  test("works", async () => {
    const json = BodyMocks?.data?.cards;
    expect(Array.isArray(json)).toEqual(true);
    expect(json.length).toEqual(12);
  });
});

it("Sholud load Body component", async () => {
  global.fetch = () =>
    Promise.resolve({
      json: () => Promise.resolve(BodyMocks),
    });
  await act(() => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const { result } = renderHook(() => useOnlineStatus());

  act(() => {
    window.dispatchEvent(new Event("offline"));
  });

  expect(result.current).toBe(false);
  const heading = screen.getByTestId("offline-text");
  expect(heading).toBeInTheDocument();
});
