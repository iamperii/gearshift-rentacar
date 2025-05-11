import Banner from '../Banner/Banner';
import { Link, NavLink } from 'react-router-dom';
import style from './header.module.scss';

const Header = () => {
	return (
		<>
			<div className={style['header-wrapper']}>
				<div className={style.nav}>
					<img
						loading="lazy"
						height="100vh"
						src="https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/670c127ebfda26ab4b18882f_logo.svg"
						alt="logo"
					/>

					<nav>
						<div className={style.pages}>
							<NavLink
								to="/"
								className={({ isActive }) => (isActive ? style.active : '')}
							>
								Home
							</NavLink>
							<NavLink
								to="/about"
								className={({ isActive }) => (isActive ? style.active : '')}
							>
								About
							</NavLink>
							<NavLink
								to="/our-fleet"
								className={({ isActive }) => (isActive ? style.active : '')}
							>
								Our Fleet
							</NavLink>
							<NavLink
								to="/contact"
								className={({ isActive }) => (isActive ? style.active : '')}
							>
								Contact Us
							</NavLink>
						</div>
						<Link to="/login">
							<button className={style['rent-button']}>Rent Now</button>
						</Link>
					</nav>
				</div>
				<Banner />
			</div>
		</>
	);
};

export default Header;
