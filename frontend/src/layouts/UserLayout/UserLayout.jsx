import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import style from './userLayout.module.scss';
import Footer from '../../components/Footer/Footer';

const UserLayout = () => {
	return (
		<div className={style.userLayout}>
			<Header />

			<main className={style.outletContainer}>
				<Outlet />
			</main>

			<Footer />
		</div>
	);
};

export default UserLayout;
