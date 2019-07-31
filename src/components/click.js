import React, { Component } from 'react';
import UpdatedComponent from './incrementer.js'
class Click extends Component {

constructor(props){
  super(props);
}
  componentDidMount(){
    console.log("in click");
    console.log(this.props);
  }
  render() {

    return (
      <div onClick={this.props.incrementCount}>{this.props.count}</div>
    );
  }

}

export default UpdatedComponent(Click) ;
