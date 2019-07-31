import React, { Component } from 'react';

const UpdatedComponent = OriginalComponent =>{


  class NewComponent extends Component {
    state = {
      count:34
    }

    handleIncrement=()=>{
      let tempCount = this.state.count + 1
      console.log("Sup");
      this.setState({
        count:tempCount
      })
    }



    render() {
      return (
        <OriginalComponent incrementCount={this.handleIncrement} count={this.state.count} />
      )
    }

  }

  return NewComponent
}

export default UpdatedComponent
