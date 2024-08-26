import { act, render, screen } from "@testing-library/react";
import ResturentMenu from "../src/ResturentMenu";
import "@testing-library/jest-dom";
import ResMenuMock from "../src/mocks/ResMenu-mock-data.json";
import { Provider } from "react-redux";
import appStore from "../src/redux/appStore";
import { json } from "react-router-dom";


it("Should be load Res Menu page with information", async () => {
    global.fetch = () => {
      return Promise.resolve({
        json: () => {
          return Promise.resolve(ResMenuMock);
        },
      });
    };
  
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
  global.fetch = () => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve(ResMenuMock);
      },
    });
  };
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

it("Should be load with categories of menu list",async()=>{
  global.fetch = () => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve(ResMenuMock);
      },
    });
  };
  await act(() => {
    render(
      <Provider store={appStore}>
        <ResturentMenu />
      </Provider>
    );
  });

    const menuItems = screen.getAllByTestId("res-menu");

    expect(menuItems.length).toBe(16);
})


