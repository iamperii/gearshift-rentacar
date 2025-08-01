import { useLocation, useNavigate } from 'react-router';
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
import { useAuth } from '../../context/AuthContext';
import { useState } from 'react';
import Modal from '../../components/Modal/Modal';

const CarDetails = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const info = location.state;

	const { user } = useAuth();
	const [showModal, setShowModal] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!user) {
			setShowModal(true);
		} else {
			navigate('/contact');
		}
	};

	const closeModal = () => {
		setShowModal(false);
	};

	return (
		<>
			<Modal show={showModal} onClose={closeModal} />

			<section className={style['car-details']}>
				<div className={style['left-section']}>
					<div className={style['image-section']}>
						<div>
							<img loading="eager" src={carImg} alt="" />
						</div>
						<div className={style['image-section-bottom']}>
							<img loading="eager" src={carImg} alt="" />
							<img loading="eager" src={carImg} alt="" />
							<img loading="eager" src={carImg} alt="" />
							<img loading="eager" src={carImg} alt="" />
						</div>
					</div>

					<div className={style['submit-section']}>
						<div className={style.price}>
							AED <p>{info.price}</p> / DAY
						</div>
						<hr />
						<h1>Interested in Renting This Car?</h1>
						<a>
							<button className={style.submit} onClick={handleSubmit}>
								Submit an Enquiry
							</button>
						</a>
						<hr />
						<div>
							<h2>Contact</h2>
							<div className={style['contact-info-container']}>
								<div className={style['contact-info']}>
									<Mail color="#ff7326" size={30} />
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
								<img loading="eager" src={speedImg} alt="" />
								<p>{info.speed}</p>
							</div>

							<div className={style['info-icon']}>
								<img loading="eager" src={automaticImg} alt="" />
								<p>Automatic</p>
							</div>

							<div className={style['info-icon']}>
								<img loading="eager" src={seatsImg} alt="" />
								<p>{info.seats}</p>
							</div>

							<div className={style['info-icon']}>
								<img loading="eager" src={baggageImg} alt="" />
								<p>{info.baggage}</p>
							</div>

							<div className={style['info-icon']}>
								<img loading="eager" src={yearImg} alt="" />
								<p>2024</p>
							</div>

							<div className={style['info-icon']}>
								<img loading="eager" src={typeImg} alt="" />
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
									<img
										loading="eager"
										src={bluetoothImg}
										alt="Bluetooth feature"
									/>
									<p>Bluetooth</p>
								</div>

								<div className={style['car-feature']}>
									<img
										loading="eager"
										src={cruiseImg}
										alt="Cruise Control feature"
									/>
									<p>Cruise Control</p>
								</div>

								<div className={style['car-feature']}>
									<img
										loading="eager"
										src={gpsImg}
										alt="Built-in GPS feature"
									/>
									<p>Built-in GPS</p>
								</div>

								<div className={style['car-feature']}>
									<img
										loading="eager"
										src={cameraImg}
										alt="Rear Camera feature"
									/>
									<p>Rear Camera</p>
								</div>

								<div className={style['car-feature']}>
									<img
										loading="eager"
										src={chargingImg}
										alt="Wireless Charging feature"
									/>
									<p>Wireless Charging</p>
								</div>

								<div className={style['car-feature']}>
									<img loading="eager" src={sunroofImg} alt="Sunroof feature" />
									<p>Sunroof</p>
								</div>

								<div className={style['car-feature']}>
									<img
										loading="eager"
										src={sensorsImg}
										alt="Parking Sensors feature"
									/>
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
