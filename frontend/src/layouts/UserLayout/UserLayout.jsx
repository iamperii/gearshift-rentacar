import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import style from './userLayout.module.scss';
import Footer from '../../components/Footer/Footer';

const UserLayout = () => {
	return (
		<div className={style.userLayout}>
			<Header />

			<div className={style.outletContainer}>
				<Outlet />
			</div>

			<Footer />
		</div>
	);
};

export default UserLayout;
