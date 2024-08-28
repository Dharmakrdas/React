import { fireEvent, render, screen } from "@testing-library/react"
import Footer from "../src/Footer"
import MocksCities from '../src/mocks/Body-mock-data.json'
import "@testing-library/jest-dom"

it("Should be load footer containt with cities names",()=>{
    const citiesMocks = MocksCities?.data?.cards[10]?.card?.card?.cities

    render(<Footer cities={citiesMocks} />)

    const totalCity = screen.getByTestId("total-cities");
    expect(totalCity).toBeInTheDocument();
    fireEvent.click(totalCity)
})