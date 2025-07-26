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
					<div className={style['footer-links']}>
						<h2>Get In Touch</h2>
						<ul className={style['footer-nav']}>
							<li>
								<a href="tel:+971 12 345 6789">+971 12 345 6789</a>
							</li>
							<li>
								<a href="mailto:info@gearshift.ae">info@gearshift.ae</a>
							</li>
							<li>
								<a href="google.com/maps/place/Downtown+Dubai+-+Dubai+-+UAE/@25.1941469,55.2585424,15z/data=!4m2!3m1!1s0x3e5f682f700cf983:0xb5cc58b076c0b904?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D">
									123 Innovation Street,
									<br /> Downtown Dubai, Dubai, UAE
								</a>
							</li>
						</ul>
					</div>
				</div>
				<hr />
				<div className={style.copyright}>
					<p>
						Copyright © GearShift | Prepared by{' '}
						<a href="https://www.github.com/iamperii">
							<span>Memmedova Peri</span>
						</a>
					</p>
				</div>
			</div>
		</>
	);
};

export default Footer;
