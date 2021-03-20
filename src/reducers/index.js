import { combineReducers } from "redux";
import users from "./usersReducer.js";
import tweets from "./tweetsReducer.js";
import authedUser from "./authedUserReducer.js"
import {loadingBarReducer} from "react-redux-loading"

export default combineReducers({
    users,
    tweets,
    authedUser,
    loadingBar: loadingBarReducer
})