import UserClass from "./UserClass";
import UserFunction from "./UserFunction";

const About =()=>{
    return(
        <div>
            <UserFunction name={"Dharam Das from Functional component"} address={"Barhalganj"} city={"Gorakhpur"} />
            <UserClass name={"Dharam Das from class comoponent"} address={"Barhalganj"} city={"Gorakhpur"}/>
        </div>
    )
}

export default About;