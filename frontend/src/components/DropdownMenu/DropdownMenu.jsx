import { Link } from 'react-router';
import { useState } from 'react';
import style from './dropdownmenu.module.scss';

const DropdownMenu = () => {
	const [hoveredIndex, setHoveredIndex] = useState(null);

	const menuItems = [
		{
			title: 'Products',
			links: [
				{ label: 'Laptops', to: '/products/laptops' },
				{ label: 'Phones', to: '/products/phones' },
			],
		},
		{
			title: 'Services',
			links: [
				{ label: 'Repair', to: '/services/repair' },
				{ label: 'Consulting', to: '/services/consulting' },
			],
		},
	];

	return (
		<div className={style['header-menu']}>
			{menuItems.map((item, index) => (
				<div
					key={index}
					className={style['menu-item']}
					onMouseEnter={() => setHoveredIndex(index)}
					onMouseLeave={() => setHoveredIndex(null)}
				>
					<span className={style['menu-title']}>{item.title}</span>
					{hoveredIndex === index && (
						<div className={style.submenu}>
							{item.links.map((link, idx) => (
								<Link key={idx} to={link.to} className={style['submenu-link']}>
									{link.label}
								</Link>
							))}
						</div>
					)}
				</div>
			))}
		</div>
	);
};

export default DropdownMenu;
