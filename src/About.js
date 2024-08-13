import { Component } from "react";
import UserClass from "./UserClass";
import UserFunction from "./UserFunction";
import UserContext from "./utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor called");
    this.state = {
      name: "dharam",
    };
  }
  componentDidMount() {
    this.setState({ name: "Dharam Das" });
    console.log("Parent componentDidMount called");
  }
  componentDidCatch() {
    console.log("Parent componentDidCatch called");
  }
  componentDidUpdate() {
    console.log("Parent componentDidUpdate called");
  }
  componentWillUnmount() {
    console.log("Parent componentWillUnmount called");
  }
  render() {
    console.log("Parent Render is called");
    return (
      <div>
        <UserContext.Consumer>
          {(data) =><h1>{data.loginUser}</h1>}
        </UserContext.Consumer>
        <UserFunction name={"Dharam Das from Functional component"} address={"Barhalganj"} city={"Gorakhpur"} />
        <UserClass name={"Dharam"} address={"Barhalganj"} city={"Gorakhpur"} />
        <UserClass name={"Virat"} address={"Karolbhag"} city={"Delhi"} />
      </div>
    );
  }
}

export default About;
