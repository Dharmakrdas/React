import { render, screen } from "@testing-library/react"
import TopResturentList from "../src/TopResturentList"
import '@testing-library/jest-dom'
import TopResMocks from "../src/mocks/Body-mock-data.json"
import { BrowserRouter } from "react-router-dom"

test("Should be load Top Resturent list with heading",()=>{
    const mockData = TopResMocks?.data?.cards[1]?.card?.card
    render(
        <BrowserRouter>
        <TopResturentList data={mockData} />
        </BrowserRouter>
    )

    const header = screen.getByText("Top restaurant chains in Bangalore");

    expect(header).toBeInTheDocument();
})

it("Should be load all items home page",()=>{
    const mockData = TopResMocks?.data?.cards[1]?.card?.card
    render(
        <BrowserRouter>
        <TopResturentList data={mockData} />
        </BrowserRouter>
    )

    const items = screen.getAllByTestId("top-res-card");

    expect(items.length).toBe(20);
})