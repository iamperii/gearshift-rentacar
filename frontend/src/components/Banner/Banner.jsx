import { Link } from 'react-router';
import style from './banner.module.scss';

const Banner = () => {
	return (
		<>
			<div className={style.banner}>
				<h1>
					Explore the Road Ahead with <span>GearShift</span> Rentals
				</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam
					justo nec ligula eleifend efficitur.
				</p>
				<Link to="/our-fleet">
					<button>View Our Fleet</button>
				</Link>
			</div>
		</>
	);
};

export default Banner;
