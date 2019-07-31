import React, { Component } from 'react';
import UpdatedComponent from './incrementer.js'
class Click extends Component {

  render() {
    return (
      <div onClick={this.props.incrementCount}>{this.props.count}</div>
    );
  }

}

export default UpdatedComponent(Click) ;
