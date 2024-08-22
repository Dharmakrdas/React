import sum from "../src/dummy/sum";

test("adding function ",()=>{
    const res = sum(2,3)
    expect(res).toBe(5);
})