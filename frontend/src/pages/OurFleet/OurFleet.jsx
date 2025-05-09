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
					<Filter title="Select Pickup Location" />
					<Filter title="Select Feature" />
				</div>
				<div className={style['car-cards']}>
					<Car
						name="Porsche Cayenne Coupe"
						price={5000}
						speed={5800}
						seats={5}
						baggage={4}
					/>
					<Car
						name="BMW M4 Competition"
						price={1300}
						speed={4700}
						seats={5}
						baggage={6}
					/>
					<Car
						name="Ferrari 458"
						price={3900}
						speed={5800}
						seats={2}
						baggage={2}
					/>
					<Car
						name="Porsche 992"
						price={2100}
						speed={5500}
						seats={2}
						baggage={3}
					/>
				</div>
			</div>
		</>
	);
};

export default OurFleet;
