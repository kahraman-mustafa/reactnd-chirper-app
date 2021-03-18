import { combineReducers } from "redux";
import users from "./usersReducer.js";
import tweets from "./tweetsReducer.js";
import authedUser from "./authedUserReducer.js"

export default combineReducers({
    users,
    tweets,
    authedUser
})