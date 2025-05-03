import style from './Car.module.scss';
import speed from '../../assets/images/speed.png';
import car from '../../assets/images/car.png';
import { Link } from 'react-router';
import Tilt from 'react-parallax-tilt';
const Car = () => {
	return (
		<>
				<Tilt className={style['car-card']}>
					<img src={car} alt={car} className={style['car-img']} />
					<h2>Porsche Cayenne Coupe</h2>
					<div className={style.price}>
						AED <p>5000</p> / DAY
					</div>
					<div className={style['car-features']}>
						<div>
							<img src={speed} alt="speed-image" />
							<p>5000</p>
						</div>
						<div>
							<img src={speed} alt="speed-image" />
							<p>Atuomtic</p>
						</div>
						<div>
							<img src={speed} alt="speed-image" />
							<p>5</p>
						</div>
						<div>
							<img src={speed} alt="speed-image" />
							<p>4</p>
						</div>
					</div>
					<Link>
						<button>See full deatils</button>
					</Link>
				</Tilt>
		</>
	);
};

export default Car;
