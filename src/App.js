// import React from 'react';
import logo from './logo.svg';
import './App.css';
import Click from './components/click.js'
import {connect} from 'react-redux'
import React, { Component } from 'react';


// <h1>{this.props.count}</h1>
class App extends Component {


  handleIncrement=()=>{
    this.props.incCount()
    console.log(this.props.name);
  }

  handleName=(event)=>{
    console.log(event.target.value);
    this.props.changeName(event.target.value)
  }

  render() {

    return (
      <div>
      <h1 onClick={this.handleIncrement}>{this.props.count}</h1>
      <h2>{this.props.name}</h2>
      <input onChange={(event)=>this.handleName(event)} placeholder="testtt"></input>
      <Click/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return{
    count:state.count,
    name: state.name
  }
}

function mapDispatchToProps(dispatch) {
return {
  incCount:()=> dispatch({type:"INC_COUNT", payload: "vibzz"}),
  changeName:(name)=> dispatch({type:"NAME_CHANGE", payload: name})


}

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
