import { render, screen } from "@testing-library/react";
import OnlineResturent from "../src/OnlineResturent";
import OnlineMock from "../src/mocks/Body-mock-data.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should be load online store near by location", () => {
  const mocks =
    OnlineMock?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;
  const heading_txt = OnlineMock?.data?.cards[2]?.card?.card;

  render(
    <BrowserRouter>
      <OnlineResturent header_txt="Restaurants with online food delivery in Bangalore" />
    </BrowserRouter>
  );

  const heading = screen.getByText(
    "Restaurants with online food delivery in Bangalore"
  );

  expect(heading).toBeInTheDocument();
});
