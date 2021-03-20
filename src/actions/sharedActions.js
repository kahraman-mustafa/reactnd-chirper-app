import { getInitialData } from "../utils/api.js";
import { receiveUsers } from "./usersActions.js";
import { receiveTweets } from "./tweetsActions.js";
import { setAuthedUser } from "./authedUserActions.js";
import { showLoading, hideLoading } from "react-redux-loading"

const AUTHED_ID = "tylermcginnis";

export function handleInitialData(){
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData()
            .then(({users, tweets}) => {
                dispatch(receiveUsers(users));
                dispatch(receiveTweets(tweets));
                dispatch(setAuthedUser(AUTHED_ID));
                dispatch(hideLoading());
            });
    }
}