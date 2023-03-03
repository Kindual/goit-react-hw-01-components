import { PropTypes } from 'prop-types'

const StatisticItem = ({label, perc}) => {
    return (
        <li className="item" >
            <span className="label">{label}</span>
            <span className="percentage">{perc}&#x25;</span>
        </li>);
}

export default StatisticItem;

StatisticItem.propTypes = {
    label: PropTypes.string.isRequired, 
    perc: PropTypes.number.isRequired,
}
