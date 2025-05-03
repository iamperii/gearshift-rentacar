import { useState } from 'react';
import Banner from '../Banner/Banner';
import { FaAngleDown } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import style from './header.module.scss';

const Header = () => {
	const [dropdown, setDropdown] = useState({
		carBrands: false,
		pages: false,
	});

	const toggleDropdown = (key) => {
		setDropdown((prev) => ({ ...prev, [key]: !prev[key] }));
	};

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
								className={style.dropdown}
								onClick={() => toggleDropdown('carBrands')}
							>
								<span>Car Brands</span>
								<FaAngleDown
									className={`${style.downIcon} ${
										dropdown.carBrands ? style.active : ''
									}`}
								/>
							</NavLink>
							<NavLink
								className={style.dropdown}
								onClick={() => toggleDropdown('pages')}
							>
								<span>Pages</span>
								<FaAngleDown
									className={`${style.downIcon} ${
										dropdown.pages ? style.active : ''
									}`}
								/>
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
