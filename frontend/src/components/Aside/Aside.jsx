import { ChevronLeft } from 'lucide-react';
import style from './aside.module.scss';

const Aside = () => {
	return (
		<>
			<div className={style.aside}>
				<a href="/">
					<ChevronLeft /> Back to home
				</a>
			</div>
		</>
	);
};

export default Aside;
