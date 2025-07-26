import style from './Car.module.scss';
import speedImg from '../../assets/images/carIcons/speed.png';
import automaticImg from '../../assets/images/carIcons/automatic.png';
import seatsImg from '../../assets/images/carIcons/seats.png';
import baggageImg from '../../assets/images/carIcons/baggage.png';
import { Link } from 'react-router';

const Car = ({ name, price, speed, seats, baggage, carIMG }) => {
	const carInfo = {
		name: name,
		price: price,
		speed: speed,
		seats: seats,
		baggage: baggage,
	};
	return (
		<>
			<div className={style['car-card']}>
				<img
					src={carIMG}
					alt={name}
					className={style['car-img']}
					loading="eager"
				/>
				<h3>{name}</h3>
				<div className={style.price}>
					AED <p>{price}</p> / DAY
				</div>
				<div className={style['car-features']}>
					<div>
						<img loading="eager" src={speedImg} alt="speed-image" />
						<p>{speed}</p>
					</div>
					<div>
						<img loading="eager" src={automaticImg} alt="automatic-image" />
						<p>Atuomatic</p>
					</div>
					<div>
						<img loading="eager" src={seatsImg} alt="seats-image" />
						<p>{seats}</p>
					</div>
					<div>
						<img loading="eager" src={baggageImg} alt="baggage-image" />
						<p>{baggage}</p>
					</div>
				</div>
				<Link to={`/cars/${name}`} state={carInfo}>
					<button>See full deatils</button>
				</Link>
			</div>
		</>
	);
};

export default Car;
