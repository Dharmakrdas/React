import useSearchResturent from "../Hooks/useSearchResturent";



// const debounce = (fn, d) => {
//     let timer;
//     return () => {
//       if (timer) clearTimeout(timer);
//       timer = setTimeout(() => {
//         fn();
//       }, d);
//     };
//   };
  
//   export const searchResturents = debounce(useSearchResturent, 500);
//   console.log(searchResturents);
  

//   const seachAPI =()=>{
//     let count = 0;
//     console.log("Data",count++)
// }

// const debounce =(fn,delay)=>{
//     let timer ;
//  return ()=>{
//     if(timer) clearTimeout(timer);
//     timer = setTimeout(()=>{
//         fn();
//     },delay)
//  }
// }

// export const searchResturents = debounce(seachAPI, 1000)