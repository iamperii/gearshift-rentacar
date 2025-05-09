import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const UserLayout = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: true,
		});
	}, []);
	return (
		<div>
			<Header />

			<main>
				<Outlet />
			</main>

			<Footer />
		</div>
	);
};

export default UserLayout;
