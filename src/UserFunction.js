import { useState } from "react";

const UserFunction =(props)=>{
    const [count,setCount] =useState(1);
    const handleClick =()=>{
        setCount(count+1);
    }
    return(
        <div className="user-info">
            <p>{count}</p>
            <button className="btn" type='button' onClick={()=>handleClick()}>Increase Count</button>
            <h1>User Name : {props.name}</h1>
            <h2>Address : {props.address}</h2>
            <h3>city : {props.city}</h3>
        </div>
    )
}

export default UserFunction;