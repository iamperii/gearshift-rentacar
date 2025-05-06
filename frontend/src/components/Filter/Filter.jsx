import style from './filter.module.scss';
import { ChevronDown } from 'lucide-react';

const Filter = ({ title }) => {
	return (
		<>
			<div>
				<div className={style['filter-tab']}>
					{title} <ChevronDown />
				</div>
			</div>
		</>
	);
};

export default Filter;
