import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        count : 1
    }
  }
  handleOnClick (){
    this.setState({
        count : this.state.count + 1
    })
  }
  render() {
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
