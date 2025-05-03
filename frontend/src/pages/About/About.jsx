import Journey from '../../components/About/Journey/Journey';
import Founder from '../../components/About/Founder/Founder';
import Stats from '../../components/Stats/Stats';
import style from './about.module.scss';
const About = () => {
	return (
		<>
			{/* <div style={{ padding: '10px 100px' }}> */}
				<Journey />
				<div className={style['stats-cards']}>
					<Stats value="10+" title="Years of Experience" />
					<Stats value="1000+" title="Happy Clients" />
					<Stats value="200+" title="Vehicles" />
					<Stats value="10+" title="Locations" />
				</div>
				<Founder />
			{/* </div> */}
		</>
	);
};

export default About;
