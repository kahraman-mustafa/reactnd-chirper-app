import { combineReducers } from "redux";
import { users as usersReducer } from "../reducers/users.js";
import { tweets as tweetsReducer } from "../reducers/tweets.js";
import { authedUser as authedUserReducer } from "../reducers/authedUser.js"

export default combineReducers({
    usersReducer,
    tweetsReducer,
    authedUserReducer
})