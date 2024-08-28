import { act, fireEvent, render, screen } from "@testing-library/react";
import ResturentMenu from "../src/ResturentMenu";
import "@testing-library/jest-dom";
import ResMenuMock from "../src/mocks/ResMenu-mock-data.json";
import { Provider } from "react-redux";
import appStore from "../src/redux/appStore";
import Header from "../src/Header"
import { BrowserRouter } from "react-router-dom";

global.fetch = () => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(ResMenuMock);
    },
  });
};

it("Should be load Res Menu page with information", async () => {
  await act(() => {
    render(
      <Provider store={appStore}>
        <ResturentMenu />
      </Provider>
    );
  });

  const resCardInformation = screen.getByTestId("resturent-card-information");

  expect(resCardInformation).toBeInTheDocument();
});

it("Should be load Res menu component with offers", async () => {
  await act(() => {
    render(
      <Provider store={appStore}>
        <ResturentMenu />
      </Provider>
    );
  });

  const resOfferCard = screen.getAllByTestId("resturent-offer");

  expect(resOfferCard.length).toBe(5);
});

it("Should be load with categories of menu list", async () => {
  await act(() => {
    render(
      <Provider store={appStore}>
        <ResturentMenu />
      </Provider>
    );
  });

  const menuItems = screen.getAllByTestId("res-menu");

  expect(menuItems.length).toBe(16);

  // const recomondationItems = screen.getByText("Recommended (20)");
  // expect(recomondationItems).toBeInTheDocument()
});

it("Should be load all accordian in Resturent Menu Page ", async () => {
  await act(() => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <ResturentMenu />
        </Provider>
      </BrowserRouter>
    );
  });

  const recomondationItems = screen.getByText("Recommended (20)");
  expect(recomondationItems).toBeInTheDocument();

  fireEvent.click(recomondationItems);

  const menuItems = screen.getAllByTestId("res-menu");
  expect(menuItems.length).toBe(16);

  const produtItems = screen.getAllByTestId("product-item");

  expect(produtItems.length).toBe(20);

  const addBtns = screen.getAllByRole("button", { name: "ADD" });

  expect(addBtns.length).toBe(20);

  fireEvent.click(addBtns[0]);

  const cartItems = screen.getByText("1");

  expect(cartItems).toBeInTheDocument();
});
