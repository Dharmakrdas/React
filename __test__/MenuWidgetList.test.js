import { render, screen } from "@testing-library/react";
import MenuWidgetList from "../src/MenuWidgetList"
import "@testing-library/jest-dom"
import MenuMocks  from '../src/mocks/MenuWidgetList-mock-data.json'
import { BrowserRouter } from "react-router-dom";

it("Should be load MenuWidgetList component",()=>{
    render(<BrowserRouter>
    <MenuWidgetList data={MenuMocks} />
    </BrowserRouter>);
    const name = screen.getByText("What's on your mind?");
    expect(name).toBeInTheDocument();
})

it("Should be load initial time data",()=>{
    render(<BrowserRouter>
    <MenuWidgetList data={MenuMocks} />
    </BrowserRouter>)
    const items = screen.getAllByTestId("menu-img")
    expect(items.length).toBe(2);
})