import {
	Outlet,
	//  useLocation
} from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScroolTop from '../utils/ScroolTop';

const UserLayout = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: true,
		});
	}, []);
	// const path = useLocation();
	// console.log(path);
	return (
		<div>
			<ScroolTop />
			<Header />

			<main>
				<Outlet />
			</main>

			<Footer />
		</div>
	);
};

export default UserLayout;
