import { act, fireEvent, render, screen, waitFor } from "@testing-library/react"
import Search from "../src/Search";
import { BrowserRouter, json } from "react-router-dom";
import SearchPolularMocks from "../src/mocks/popular-cusines-mock.json";
import '@testing-library/jest-dom'
import SearchMocks from "../src/mocks/seach-mock-data.json"


it("Should be call pololar cusines api get data", async()=>{
    const json =  SearchPolularMocks?.data?.cards

    expect(Array.isArray(json)).toBe(true)
    expect(json.length).toBe(2);
})

it("Should be load Search Component with heading",async ()=>{
    global.fetch = () =>
        Promise.resolve({
          json: () => Promise.resolve(SearchPolularMocks),
        });
   await act(()=>{
    render( <BrowserRouter>
    <Search />
    </BrowserRouter> )
   }) 

   const cusines = screen.getByText("Popular Cuisines")
   expect(cusines).toBeInTheDocument();
})

it("Should be search imput loaded in Search Component", async()=>{

    global.fetch = ()=>{
        return Promise.resolve({
            json :()=>{
                return Promise.resolve(SearchPolularMocks)
            }
        })
    }

    await act(()=>{
      render(  <BrowserRouter>
        <Search />
        </BrowserRouter>)
    })

    const searchInput = screen.getByTestId("search-input");
    expect(searchInput).toBeInTheDocument();

    fireEvent.change(searchInput,{target : {value:"kfc"}});
    
    fireEvent.keyUp(searchInput);
    
   await waitFor(()=>{
    jest.fn(()=>{
        return Promise.resolve({
            json:()=>{
                return Promise.resolve(SearchMocks?.data?.suggestions)
            }
        })
    })
   })
    // expect(getData).toHaveBeenCalled();

    // const searchItem = screen.getAllByTestId("search-item")

    // expect(searchItem.length).toBe(10);
})

