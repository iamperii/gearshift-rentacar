import Journey from '../../components/About/Journey/Journey';
import Founder from '../../components/About/Founder/Founder';
import Stats from '../../components/Stats/Stats';
import style from './about.module.scss';
import OurFeatures from '../../components/OurFeatures/OurFeatures';
import OurLocations from '../../components/Our-Locations/OurLocations';
const About = () => {
	return (
		<>
			<Journey />
			<div className={style['stats-cards']} data-aos="fade-up">
				<Stats value={10} title="Years of Experience" />
				<Stats value={1000} title="Happy Clients" />
				<Stats value={200} title="Vehicles" />
				<Stats value={10} title="Locations" />
			</div>
			<Founder />
			<OurFeatures data-aos="fade-up" />
			<OurLocations data-aos="fade-up" />
		</>
	);
};

export default About;
