import React from 'react'
import { PropTypes } from 'prop-types'


export default function Transaction({ item }) {
    return (
        <tr>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
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
