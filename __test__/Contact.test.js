import Contact from "../src/Contact";
import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom"


test("Shoild be render contact page with heading text",()=>{
    render(<Contact />);
   const heading =  screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
})

test("Shoild be render contact page with h1 tag",()=>{
    render(<Contact />);
   const heading =  screen.getByText("Contact US");

    expect(heading).toBeInTheDocument();
})

test("should be load text input first name",()=>{
    render(<Contact />)
    const text = screen.getAllByRole("textbox");
    expect(text.length).toBe(2)
})

test("Should be load submit button ",()=>{
    render(<Contact />)
    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument()
})