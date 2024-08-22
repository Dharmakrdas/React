import { render, screen } from "@testing-library/react"
import SearchProduct from "../src/SerachProduct"
import SearchMocks from '../src/mocks/seach-mock-data.json'
import '@testing-library/jest-dom'

it("Should be load with tittle on Search Product page",()=>{
    render(<SearchProduct data={SearchMocks?.data?.suggestions[0]} />)
    const name = screen.getByText("KFC");

    expect(name).toBeInTheDocument();
})