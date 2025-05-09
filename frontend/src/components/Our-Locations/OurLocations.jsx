import style from './ourLocations.module.scss';
import jumeriah from '../../assets/images/locations/jumeriah.png';
import jbr from '../../assets/images/locations/jbr.png';
import downtownDubai from '../../assets/images/locations/downtownDubai.png';
import dubaiMarina from '../../assets/images/locations/dubaiMarina.png';

const OurLocations = () => {
	return (
		<>
			<div className={style['our-locations']} data-aos="fade-up">
				<h1>Our Locations</h1>
				<div className={style.locations}>
					<div className={style.location}>
						<img src={jumeriah} alt="Palm Jumeriah" />
						<p>Palm Jumeirah</p>
					</div>
					<div className={style.location}>
						<img src={jbr} alt="JBR" />
						<p>JBR</p>
					</div>
					<div className={style.location}>
						<img src={downtownDubai} alt="Downtown Dubai" />
						<p>Downtown Dubai</p>
					</div>
					<div className={style.location}>
						<img src={dubaiMarina} alt="Dubai Marina" />
						<p>Dubai Marina</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default OurLocations;
