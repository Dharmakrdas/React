import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../src/Body";
import BodyMocks from "../src/mocks/Body-mock-data.json";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

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
        <Body  />
      </BrowserRouter>
    );
  });

//  const online =  fireEvent.offline()
//  expect(online).toBe(false);
//  const heading = screen.getByRole('heading');
//  expect(heading).toBeInTheDocument();

});
