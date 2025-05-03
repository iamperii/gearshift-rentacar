import style from './journey.module.scss';
import cars from '../../../assets/images/cars.png';
const Journey = () => {
	return (
		<>
			<div className={style.journey}>
				<div className={style['journey-content']}>
					<div>
						<h1>Our Journey</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</p>
					</div>
					<div>
						<h1>Our Journey</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</p>
					</div>
				</div>
				<img src={cars} alt="cars" />
			</div>
		</>
	);
};

export default Journey;
