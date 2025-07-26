import style from './ourLocations.module.scss';
import { Link } from 'react-router-dom';
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
					<Link
						to={`/locations/${'palm-jumeriah'}`}
						state={{
							name: 'Palm Jumeriah',
							src: jumeriah,
						}}
						className={style.location}
					>
						<img loading="eager" src={jumeriah} alt="Palm Jumeriah" />
						<p>Palm Jumeirah</p>
					</Link>
					<Link
						to={`/locations/${'jbr'}`}
						state={{
							name: 'JBR',
							src: jbr,
						}}
						className={style.location}
					>
						<img loading="eager" src={jbr} alt="JBR" />
						<p>JBR</p>
					</Link>
					<Link
						to={`/locations/${'downtown-dubai'}`}
						state={{
							name: 'Downtown Dubai',
							src: downtownDubai,
						}}
						className={style.location}
					>
						<img loading="eager" src={downtownDubai} alt="Downtown Dubai" />
						<p>Downtown Dubai</p>
					</Link>
					<Link
						to={`/locations/${'dubai-marina'}`}
						state={{
							name: 'Dubai Marina',
							src: dubaiMarina,
						}}
						className={style.location}
					>
						<img loading="eager" src={dubaiMarina} alt="Dubai Marina" />
						<p>Dubai Marina</p>
					</Link>
				</div>
			</div>
		</>
	);
};

export default OurLocations;
