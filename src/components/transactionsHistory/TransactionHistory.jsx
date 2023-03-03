import React from 'react'
import Transaction from '../transaction/Transaction'
import { PropTypes } from 'prop-types'


export default function TransactionHistory({ items }) {
    return (
        <table className="transaction-history">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
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


