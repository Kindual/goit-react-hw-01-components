import { StatisticItem } from "../statisticItem/statisticItem";
import { PropTypes } from 'prop-types';
import css from './statistics.module.css'


export const Statistics = ({ stats, title }) => {
    return (
        <section className={css.statistics}>
            <h2 className={css.title}>{title}</h2>

            <ul className={css.statList}>
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