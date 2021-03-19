import React, { Component } from 'react'
import {connect} from "react-redux";
import {handleInitialData} from "../actions/sharedActions.js"
import Dashboard from "./Dashboard.js"

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.loading === true ? (<p>LOADING</p>) : <Dashboard/>}
      </div>
    )
  }
}

function mapStateToProps({authedUser}){
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);