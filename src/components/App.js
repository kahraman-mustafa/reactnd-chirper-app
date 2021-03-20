import React, { Component } from 'react'
import {connect} from "react-redux";
import {handleInitialData} from "../actions/sharedActions.js"
import Dashboard from "./Dashboard.js"
import NewTweet from "./NewTweet.js"
import TweetPage from "./TweetPage.js"
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
          : <TweetPage match={{params: {id: "6h5ims9iks66d4m7kqizmv"}}}/>}
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