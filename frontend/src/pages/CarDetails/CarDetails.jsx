import { Link, useLocation } from 'react-router';
import style from './carDetails.module.scss';
import carImg from '../../assets/images/car-1.png';
import speedImg from '../../assets/images/carIcons/speed.png';
import automaticImg from '../../assets/images/carIcons/automatic.png';
import seatsImg from '../../assets/images/carIcons/seats.png';
import baggageImg from '../../assets/images/carIcons/baggage.png';
import yearImg from '../../assets/images/carIcons/year.png';
import typeImg from '../../assets/images/carIcons/type.png';
import bluetoothImg from '../../assets/images/features/bluetooth.png';
import cameraImg from '../../assets/images/features/camera.png';
import chargingImg from '../../assets/images/features/charging.png';
import cruiseImg from '../../assets/images/features/cruise.png';
import gpsImg from '../../assets/images/features/gps.png';
import sensorsImg from '../../assets/images/features/sensors.png';
import sunroofImg from '../../assets/images/features/sunroof.png';
import { Mail, Phone } from 'lucide-react';

const CarDetails = () => {
	const location = useLocation();
	const info = location.state;
	console.log(info);
	return (
		<>
			<section className={style['car-details']}>
				<div className={style['left-section']}>
					<div className={style['image-section']}>
						<div>
							<img src={carImg} alt="" />
						</div>
						<div className={style['image-section-bottom']}>
							<img src={carImg} alt="" />
							<img src={carImg} alt="" />
							<img src={carImg} alt="" />
							<img src={carImg} alt="" />
						</div>
					</div>

					<div className={style['submit-section']}>
						<div className={style.price}>
							AED <p>{info.price}</p> / DAY
						</div>
						<hr />
						<h1>Interested in Renting This Car?</h1>
						<Link to={'/contact'}>
							<button className={style.submit}>Submit an Enquiry</button>
						</Link>
						<hr />
						<div>
							<h2>Contact</h2>
							<div className={style['contact-info-container']}>
								<div className={style['contact-info']}>
									<Mail color="#ff7326"  size={30}/>
									<a href="mailto:info@gearshift.ae">info@gearshift.ae</a>
								</div>
								<div className={style['contact-info']}>
									<Phone color="#ff7326" size={30} />
									<a href="tel:+971 12 345 6789">+971 12 345 6789</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className={style['right-section']}>
					<div className={style['info-section']}>
						<h1 className={style['car-name']}>{info.name}</h1>

						<div className={style['info-icons']}>
							<div className={style['info-icon']}>
								<img src={speedImg} alt="" />
								<p>{info.speed}</p>
							</div>

							<div className={style['info-icon']}>
								<img src={automaticImg} alt="" />
								<p>Automatic</p>
							</div>

							<div className={style['info-icon']}>
								<img src={seatsImg} alt="" />
								<p>{info.seats}</p>
							</div>

							<div className={style['info-icon']}>
								<img src={baggageImg} alt="" />
								<p>{info.baggage}</p>
							</div>

							<div className={style['info-icon']}>
								<img src={yearImg} alt="" />
								<p>2024</p>
							</div>

							<div className={style['info-icon']}>
								<img src={typeImg} alt="" />
								<p>SUV</p>
							</div>
						</div>
						<p className={style.description}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute
							irure dolor in reprehenderit in voluptate velit esse cillum dolore
							eu fugiatniam, quis nostrud exercitation ullamco laboris nisi ut
							aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur.
						</p>
						<hr />

						<div className={style['specifications-section']}>
							<h1>Specifications</h1>
							<div className={style['specifications-details']}>
								<div className={style['specifications-detail']}>
									<p>Millage</p>
									<p className={style['detail-value']}>{info.speed}</p>
								</div>

								<div className={style['specifications-detail']}>
									<p>Transmission</p>
									<p className={style['detail-value']}>Automatic </p>
								</div>

								<div className={style['specifications-detail']}>
									<p>Seats</p>
									<p className={style['detail-value']}>{info.seats}</p>
								</div>

								<div className={style['specifications-detail']}>
									<p>Baggage</p>
									<p className={style['detail-value']}>{info.baggage}</p>
								</div>

								<div className={style['specifications-detail']}>
									<p>Year</p>
									<p className={style['detail-value']}>2024</p>
								</div>

								<div className={style['specifications-detail']}>
									<p>Type</p>
									<p className={style['detail-value']}>SUV</p>
								</div>

								<div className={style['specifications-detail']}>
									<p>Brand</p>
									<p className={style['detail-value']}>Porsche</p>
								</div>

								<div className={style['specifications-detail']}>
									<p>Location</p>
									<p className={style['detail-value']}>Dubai Marina</p>
								</div>
							</div>
						</div>

						<hr />
						<div className={style['features-section']}>
							<h1 className={style.featuresTitle}>Features</h1>
							<div className={style['car-features']}>
								<div className={style['car-feature']}>
									<img src={bluetoothImg} alt="	" />
									<p>Bluetooth</p>
								</div>

								<div className={style['car-feature']}>
									<img src={cruiseImg} alt="	" />
									<p>Cruise Control</p>
								</div>

								<div className={style['car-feature']}>
									<img src={gpsImg} alt="	" />
									<p>Built-in GPS</p>
								</div>

								<div className={style['car-feature']}>
									<img src={cameraImg} alt="	" />
									<p>Rear Camera</p>
								</div>

								<div className={style['car-feature']}>
									<img src={chargingImg} alt="	" />
									<p>Wireless Charging</p>
								</div>

								<div className={style['car-feature']}>
									<img src={sunroofImg} alt="	" />
									<p>Sunroof</p>
								</div>

								<div className={style['car-feature']}>
									<img src={sensorsImg} alt="	" />
									<p>Parking Sensors</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default CarDetails;
