import style from './ourLocations.module.scss';
import location from '../../assets/images/locations/location.png';
const OurLocations = () => {
	return (
		<>
			<div className={style['our-locations']}>
				<h1>Our Locations</h1>
				<div className={style.locations}>
					<div className={style.location}>
						<img src={location} alt="" />
						<p>Palm Jumeirah</p>
					</div>
					<div className={style.location}>
						<img src={location} alt="" />
						<p>Palm Jumeirah</p>
					</div>
					<div className={style.location}>
						<img src={location} alt="" />
						<p>Palm Jumeirah</p>
					</div>
					<div className={style.location}>
						<img src={location} alt="" />
						<p>Palm Jumeirah</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default OurLocations;
