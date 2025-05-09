import style from './founder.module.scss';
import founder from '../../../assets/images/about/founder.png';

const Founder = () => {
	return (
		<>
			<div>
				<div className={style.founder}>
					<img src={founder} alt="founder-image" />
					<div className={style['founder-content']}>
						<div>
							<h1>Meet Our Founder</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat.
							</p>
						</div>
						<div>
							<h1>Leadership & Expertise</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Founder;
