import style from './footer.module.scss';
import FooterBottomContent from './FooterBottomContent/FooterBottomContent';
import FooterTopContent from './FooterTopContent/FooterTopContent';
const Footer = () => {
	return (
		<>
			<div className={style.footer}>
				<div data-aos="fade-up">
					<FooterTopContent />
				</div>
				<hr />
				<div className={style['footer-bottom']} data-aos="fade-up">
					<FooterBottomContent
						title="Pages"
						links={[
							{ name: 'Home', to: '/' },
							{ name: 'About Us', to: '/about' },
							{ name: 'Our Fleet', to: '/our-fleet' },
							{ name: 'Contact Us', to: '/contact' },
						]}
					/>
					<FooterBottomContent
						title="Template Pages"
						links={[
							{ name: 'Cars Template', to: '/cars-template' },
							{ name: 'Car Types Template', to: '/car-types' },
							{ name: 'Car Locations Template', to: '/car-locations' },
							{ name: 'Car Brands Template', to: '/car-brands' },
							{ name: 'Features Template', to: '/features' },
						]}
					/>
					<FooterBottomContent
						title="Get in touch"
						links={[
							{ name: '+971 12 345 6789 ', to: '/cars-template' },
							{ name: 'info@gearshift.ae', to: '/car-types' },
							{
								name: '123 Innovation Street, Downtown Dubai, Dubai, UAE',
								to: '/car-locations',
							},
						]}
					/>
				</div>
				<hr />
				<div className={style.copyright}>
					<p>
						Copyright © GearShift | Designed by{' '}
						<a href="https://github.com/iamperii">M.Peri</a>
					</p>
				</div>
			</div>
		</>
	);
};

export default Footer;
