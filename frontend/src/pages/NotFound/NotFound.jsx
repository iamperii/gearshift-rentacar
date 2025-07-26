import style from './notFound.module.scss';
import { Link2Off } from 'lucide-react';
import { Link } from 'react-router';

const NotFound = () => {
	return (
		<>
			<div className={style['not-found']}>
				<div className={style['not-found-card']}>
					<div className={style['not-found-icon']}>
						<Link2Off size={50} color="white" />
					</div>
					<p className={style['not-found-info']}>Page Not Found</p>
					<p className={style['not-found-desc']}>
						The page you are looking for doesnt exist or has been moved
					</p>
					<Link to="/">
						<button>Home</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default NotFound;
