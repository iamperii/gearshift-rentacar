import FeaturedCars from '../Featured-Cars/FeaturedCars';
import OurLocations from '../Our-Locations/OurLocations';
import OurFeatures from '../OurFeatures/OurFeatures';
import Stats from '../Stats/Stats';
import style from './home.module.scss';
const Home = () => {
	return (
		<>
			<div className={style.home}>
				<div className={style['stats-cards']}>
					<Stats value={10} title="Years of Experience" />
					<Stats value={1000} title="Happy Clients" />
					<Stats value={200} title="Vehicles" />
					<Stats value={10} title="Locations" />
				</div>
				<FeaturedCars />
				<OurLocations />
				<OurFeatures />
			</div>
		</>
	);
};

export default Home;
