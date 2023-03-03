import StatisticItem from "../statisticItem/statisticItem"
import { PropTypes } from 'prop-types'


export const Statistics = ({ stats, title }) => {
    return (
        <section className="statistics">
            <h2 className="title">{title}</h2>

            <ul className="stat-list">
                {
                    stats.map(el => (
                        <StatisticItem key={el.id} label={el.label} perc={el.percentage} />
                    ))
                }
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape(
            {
                id: PropTypes.string.isRequired,
            }
        )
    ),

    title: PropTypes.string.isRequired,
}