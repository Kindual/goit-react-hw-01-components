import React from 'react'
import Friend from '../friend/Friend'
import { PropTypes } from 'prop-types'


export default function FriendList({ friends }) {
    return (
        <ul className="friend-list">
            {
                friends.map(friend => (
                    <Friend key={friend.id} friend={friend} />
                ))
            }
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }))
}


