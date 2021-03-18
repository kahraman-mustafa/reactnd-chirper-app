import { combineReducers } from "redux";
import users from "./users.js";
import tweets from "./tweets.js";
import authedUser from "./authedUser.js"

export default combineReducers({
    users,
    tweets,
    authedUser
})