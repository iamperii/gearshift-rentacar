import { useLocation } from 'react-router';
import style from './location.module.scss';

const Location = () => {
	const location = useLocation();
	const state = location.state;

	return (
		<>
			{state ? (
				<div className={style['location-container']}>
					<div className={style['location-left']}>
						<h1>Cars in {state.name}</h1>
						<p className={style['location-desc']}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute
							irure dolor in reprehenderit in voluptate velit esse cillum dolore
							eu fugiatniam, quis nostrud exercitation ullamco laboris nisi ut
							aliquip ex ea commodo consequat.
						</p>
					</div>
					<img src={state.src} alt="Location photo" loading="eager" />
				</div>
			) : (
				<div>Error loading page..</div>
			)}
		</>
	);
};

export default Location;
