import React from 'react'
import Transaction from '../transaction/Transaction'
import { PropTypes } from 'prop-types'
import css from './TransactionHistory.module.css'

export default function TransactionHistory({ items }) {
    return (
        <table className={css.transactionHistory}>
            <thead>
                <tr className={css.tableHead}>
                    <th className={css.tableH}>Type</th>
                    <th className={css.tableH}>Amount</th>
                    <th className={css.tableH}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {
                    items.map(item => (
                        <Transaction key={item.id} item={item} />
                    ))
                }
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    )
}


