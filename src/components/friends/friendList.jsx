import React from 'react'
import Friend from '../friend/Friend'
import { PropTypes } from 'prop-types'
import css from './friendList.module.css'


export default function FriendList({ friends }) {
    return (
        <ul className={css.friendList}>
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


