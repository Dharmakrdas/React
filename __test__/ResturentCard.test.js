import { render, screen } from "@testing-library/react"
import ResturentCard from "../src/ResturentCard"
import RES_MOCKS from '../src/mocks/ResturentCard-mockdata.json'
import "@testing-library/jest-dom"
import { peopleChoice } from "../src/ResturentCard"

it("Should be load ResturentCard with props data",()=>{
    render(<ResturentCard data={RES_MOCKS} />)
    const resCard = screen.getByText("Chinese Wok");
    expect(resCard).toBeInTheDocument();
})

it("Should be load resturent card with choice label",()=>{
    const RecomendedCard = peopleChoice(ResturentCard);
    render(<RecomendedCard   {...RES_MOCKS} />)
    const choicelabel = screen.getByText("People Choice");
    expect(choicelabel).toBeInTheDocument();
})