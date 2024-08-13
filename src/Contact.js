import { useContext, useEffect } from "react";
import UserContext from "./utils/UserContext";

const Contact =()=>{
    const {setUserName} = useContext(UserContext);
    useEffect(()=>{
        setUserName("Dharam")
    },[]);
    return(
        <div>
            <h1>This is contact page</h1>
        </div>
    )
}

export default Contact;