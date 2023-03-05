import React from 'react'
import { PropTypes } from 'prop-types'
import css from './Transaction.module.css'


export default function Transaction({ item }) {
    return (
        <tr className={css.tableR}>
            <td className={css.tableD}>{item.type}</td>
            <td className={css.tableD}>{item.amount}</td>
            <td className={css.tableD}>{item.currency}</td>
        </tr>
    )
}

Transaction.propTypes = {
    item: PropTypes.shape({
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })
}
