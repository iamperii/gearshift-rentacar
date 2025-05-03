import style from './stats.module.scss';

const Stats = (props) => {
	const { value, title } = props;

	return (
		<>
			<div className={style['stats-card']}>
				<h2>{value}</h2>
				<h3>{title}</h3>
				<p className={style.text}>Lorem ipsum dolor sit amet</p>
			</div>
		</>
	);
};

export default Stats;
