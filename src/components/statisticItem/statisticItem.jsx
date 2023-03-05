import React from 'react';
import { PropTypes } from 'prop-types';
import css from './statisticItem.module.css';

export const StatisticItem = ({ label, perc }) => {
    return (
        <li className={css.item} style={{background: `${'#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()}`}}>

            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{perc}&#x25;</span>
        </li>);
}

StatisticItem.propTypes = {
    label: PropTypes.string.isRequired,
    perc: PropTypes.number.isRequired,
}

