import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../src/Header";
import { Provider } from "react-redux";
import appStore from "../src/redux/appStore";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom'

it("Should be load header component with cart", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cart = screen.getByText("Cart");
  expect(cart).toBeInTheDocument()
});

it("Should be load header component with SignIn buttun", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const SignIn = screen.getByRole("button",{name:"SignIn"});
    expect(SignIn).toBeInTheDocument()

    fireEvent.click(SignIn);
    const SignOut = screen.getByRole("button",{name:"SignOut"});
    expect(SignOut).toBeInTheDocument();
  });

  it("Should be load header component with offer", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const offer = screen.getByText("Offer");
    expect(offer).toBeInTheDocument()

    const search = screen.getByText("Search");
    expect(search).toBeInTheDocument()

    const help = screen.getByText("Help");
    expect(help).toBeInTheDocument()

    const home = screen.getByText("Swigy Corporate");
    expect(home).toBeInTheDocument()
  });