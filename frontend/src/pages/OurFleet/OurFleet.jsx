import Filter from '../../components/Filter/Filter';
import Car from '../../components/Car/Car';
import style from './OurFleet.module.scss';
const OurFleet = () => {
	return (
		<>
			<div className={style['our-fleet']}>
				<div className={style['filter-tabs']}>
					<Filter title="Select Car Type" />
					<Filter title="Select Car Brand" />
					<Filter title="Select Car Pickup Location" />
					<Filter title="Select Car Feature" />
				</div>
				<div className={style['car-cards']}>
					<Car />
					<Car />
					<Car />
					<Car />
				</div>
			</div>
		</>
	);
};

export default OurFleet;
