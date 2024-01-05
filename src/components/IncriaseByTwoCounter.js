import React, { Component } from 'react'
import { increaseByTwoCounter } from '../redux/actions/counterActions';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class IncriaseByTwoCounter extends Component {
  render() {
    return (
      <div>
         <button onClick={e=>{
          this.props.dispatch(increaseByTwoCounter());
        }}>
          2 arttır
        </button>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch){
  return {actions:bindActionCreators(increaseByTwoCounter,dispatch)}
}
export default connect(mapDispatchToProps)(IncriaseByTwoCounter);