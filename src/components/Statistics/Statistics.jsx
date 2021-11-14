import PropTypes from "prop-types";
import randomColor from "../../helpers/randomColor";
const Statistics = ({ title, stats }) => (
  <section className="statistics">
    {title && <h2 className="title">Upload stats</h2>}

    <ul className="stat-list">
      {stats.map(({ id, label, percentage }) => (
        <li
          className="item"
          key={id}
          style={{ backgroundColor: randomColor() }}
        >
          <span className="label">{label}</span>
          <span className="percentage">{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default Statistics;
