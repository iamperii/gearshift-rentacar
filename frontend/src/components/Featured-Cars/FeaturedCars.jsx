import style from './featuredCars.module.scss';
import { Link } from 'react-router';
import Car from '../Car/Car';
const FeaturedCars = () => {
	return (
		<>
			<div className={style.featuredCtn} data-aos="fade-up">
				<div className={style.featuredHead}>
					<h1>FEATURED CARS</h1>
					<Link to="/our-fleet">
						<button className={style['show-button']}>Show all </button>
					</Link>
				</div>
				<div className={style['car-cards']}>
					<Car
						name="Porsche Cayenne Coupe"
						price={5000}
						speed={5800}
						seats={5}
						baggage={4}
					/>
					<Car
						name="BMW M4 Competition"
						price={1300}
						speed={4700}
						seats={5}
						baggage={6}
					/>
					<Car
						name="Ferrari 458"
						price={3900}
						speed={5800}
						seats={2}
						baggage={2}
					/>
					<Car
						name="Porsche 992"
						price={2100}
						speed={5500}
						seats={2}
						baggage={3}
					/>
				</div>
			</div>
		</>
	);
};

export default FeaturedCars;
