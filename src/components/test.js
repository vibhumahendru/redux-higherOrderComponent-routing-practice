import React, { Component } from 'react';

class Test extends Component {
  componentDidMount(){
    console.log(this.props);
  }

  handleClick=()=>{
    console.log("soooopp");
    this.props.history.push("./login")
  }
  render() {
    return (
      <div>TESTTT
        <button onClick={this.handleClick}>send back to login</button>
      </div>
    );
  }

}

export default Test;
