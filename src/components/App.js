import React, { Component } from 'react'
import {connect} from "react-redux";
import {handleInitialData} from "../actions/sharedActions.js"
import Dashboard from "./Dashboard.js"
import NewTweet from "./NewTweet.js"
import LoadingBar from "react-redux-loading"

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <LoadingBar/>
        {this.props.loading === true 
          ? null
          : <NewTweet/>}
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