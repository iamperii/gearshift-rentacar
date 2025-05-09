import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import style from './stats.module.scss';

const Stats = ({ value, title }) => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		let start = 0;
		const end = value;
		const duration = 1.5;
		const stepTime = 50;
		const stepCount = Math.ceil((duration * 1000) / stepTime);

		const timer = setInterval(() => {
			start += Math.ceil(end / stepCount);
			if (start >= end) {
				clearInterval(timer);
				start = end;
			}
			setCounter(start);
		}, stepTime);

		return () => clearInterval(timer);
	}, [value]);

	return (
		<div className={style['stats-card']} data-aos="fade-up">
			<motion.h2 animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
				<span>{counter}+</span>
			</motion.h2>
			<h3>{title}</h3>
			<p className={style.text}>Lorem ipsum dolor sit amet</p>
		</div>
	);
};

export default Stats;
