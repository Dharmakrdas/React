import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        count : 1
    }
    console.log( this.props.name+ "  Constructor called");
    
  }
  handleOnClick (){
    this.setState({
        count : this.state.count + 1
    })
  }
  componentDidMount(){
    console.log( this.props.name+" componentDidMount called");
}
componentDidUpdate(){
    console.log(this.props.name+" componentDidUpdate called");
}
  render() {
    console.log(this.props.name+ " render is called");
    
    return (
      <div className="user-info">
        <p>{this.state.count}</p>
        <button type='button' className="btn" onClick={()=>this.handleOnClick()}>Increasee Count</button>
        <h1>User Name : {this.props.name}</h1>
        <h2>Address : {this.props.address}</h2>
        <h3>city : {this.props.city}</h3>
      </div>
    );
  }
}

export default UserClass;
