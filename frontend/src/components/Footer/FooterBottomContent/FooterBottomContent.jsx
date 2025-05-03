import { NavLink } from 'react-router-dom';
import style from './footerBottomContent.module.scss';

const FooterBottomContent = ({ title, links }) => {
	return (
		<div className={style['footer-bottom-content']}>
			<div className={style['footer-links']}>
				<h2>{title}</h2>
				<ul className={style['footer-nav']}>
					{links.map((link, index) => (
						<li key={index}>
							<NavLink
								to={link.to}
								className={({ isActive }) => (isActive ? style.active : '')}
							>
								{link.name}
							</NavLink>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default FooterBottomContent;
