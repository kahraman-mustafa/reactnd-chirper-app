import React, { Component, Fragment } from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom";
import {connect} from "react-redux";
import {handleInitialData} from "../actions/sharedActions.js";
import Dashboard from "./Dashboard.js";
import NewTweet from "./NewTweet.js";
import TweetPage from "./TweetPage.js";
import LoadingBar from "react-redux-loading";
import Nav from "./Nav.js";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    console.log(this.props)
    return (
      <Router>
        <Fragment>
          <LoadingBar/>
          <div className="container">
            <Nav />
            {this.props.loading === true 
              ? null
              : <div>
                  <Route path="/" exact component={Dashboard} />
                  <Route path="/tweet/:id" component={TweetPage} />
                  <Route path="/new" component={NewTweet} />
                </div>}
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({authedUser}){
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);