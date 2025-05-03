import style from './featuredCars.module.scss';
import { Link } from 'react-router';
import Car from '../Car/Car';
const FeaturedCars = () => {
	return (
		<>
			<div className={style.featuredCtn}>
				<div className={style.featuredHead}>
					<h1>FEATURED CARS</h1>
					<Link to="/our-fleet">
						<button className={style['show-button']}>Show all </button>
					</Link>
				</div>
				<div className={style['car-cards']}>
					<Car />
					<Car />
					<Car />
					<Car />
				</div>
			</div>
		</>
	);
};

export default FeaturedCars;
