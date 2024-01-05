import React, { Component } from 'react'
import {connect} from 'react-redux'

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.counter}</h1>
      </div>
    )
  }
}

function mapstateToProps(state){

    return{counter:state.counterReducer}

}

export default connect(mapstateToProps)(Counter);