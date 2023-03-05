import { PropTypes } from 'prop-types'
import React from 'react'
import css from './friend.module.css'

export default function Friend({friend}) {
    return (
        <li className={css.item}>
            <span className={ friend.isOnline ? css.statusTrue : css.statusFalse}>{friend.isOnline}</span>
            <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
            <p className={css.name}>{friend.name}</p>
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
