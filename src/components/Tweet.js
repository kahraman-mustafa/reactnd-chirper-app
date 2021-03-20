import React, { Component} from "react"
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux"
import {formatTweet, formatDate} from "../utils/helpers.js"
import { handleToggleTweet } from "../actions/tweetsActions"
import {TiArrowBackOutline} from "react-icons/ti"
import {TiHeartOutline} from "react-icons/ti"
import {TiHeartFullOutline} from "react-icons/ti"

class Tweet extends Component {
    handleLike = (e) => {
        e.preventDefault();

        const {authedUser, tweet, dispatch} = this.props;

        dispatch(handleToggleTweet({
            authedUser, 
            id: tweet.id, 
            hasLiked: tweet.hasLiked
        }))
    }

    toParent = (e, id) => {
        e.preventDefault();
        this.props.history.push(`/tweet/${id}`)
    }

    render() {
        const { tweet } = this.props;

        if (tweet === null) {
            return <p>This Tweet doesn't exist</p>
        }

        console.log(this.props);

        const { 
            id, name, avatar, timestamp, text, hasLiked, likes, replies, parent
        } = tweet;
        
        return (
            <Link to={`/tweet/${id}`} className="tweet">
                <img
                    src={avatar}
                    alt={`Avatar of ${name}`}
                    className="avatar"
                />

                <div className="tweet-info">
                    <div>
                        <span>{name}</span>
                        <div>{formatDate(timestamp)}</div>
                        {parent && (
                            <button className="replying-to" onClick={(e) => this.toParent(e, parent.id)}>
                                Replying to @{parent.author}
                            </button>
                        )}
                        <p>{text}</p>
                    </div>

                    <div className="tweet-icons">
                        <Link to={`/tweet/${id}`}>
                            <TiArrowBackOutline className="tweet-icon" />
                        </Link>
                        <span>{replies !== 0 && replies}</span>
                        <button className="heart-button" onClick={this.handleLike}>
                            {hasLiked === true
                                ? <TiHeartFullOutline color="#e0245e" className="tweet-icon"/>
                                : <TiHeartOutline className="tweet-icon"/>}
                        </button>
                        <span>{likes !== 0 && likes}</span>
                    </div>
                </div>
            </Link>
        )
    }
}

function mapStateToProps({authedUser, users, tweets}, {id}){
    const tweet = tweets[id];
    const parentTweet = tweet ? tweets[tweet.replyingTo] : null

    return {
        authedUser,
        tweet: tweet 
            ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
            : null
    }
}

export default withRouter(connect(mapStateToProps)(Tweet));