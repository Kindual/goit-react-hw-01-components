import { PropTypes } from 'prop-types'
import React from 'react'

export default function Friend({friend}) {
    return (
        <li className="item">
            <span className="status">{friend.isOnline}</span>
            <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
            <p className="name">{friend.name}</p>
        </li>
    )
}

Friend.propTypes = {
    friend: PropTypes.shape({
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })
}
