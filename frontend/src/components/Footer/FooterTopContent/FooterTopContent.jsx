import style from './footerTopContent.module.scss';
import { FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { RiTelegram2Line, RiTwitterLine } from 'react-icons/ri';
import { FiFacebook } from 'react-icons/fi';

const FooterTopContent = () => {
	return (
		<>
			<div className={style.footerTopContent}>
				<div className={style['footer-logo-social']}>
					<img
						loading="lazy"
						height="100vh"
						src="https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/670c127ebfda26ab4b18882f_logo.svg"
						alt="logo"
					/>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam
						justo nec ligula eleifend efficitur.
					</p>

					<nav className={style.socials}>
						<ul>
							<li>
								<Link to="https://x.com/home" target="_blank">
									<RiTwitterLine size={30} />
								</Link>
							</li>

							<li>
								<Link to="https://www.instagram.com" target="_blank">
									<FaInstagram size={30} />
								</Link>
							</li>

							<li>
								<Link to="https://www.facebook.com" target="_blank">
									<FiFacebook size={30} />
								</Link>
							</li>

							<li>
								<Link to="https://x.com/home" target="_blank">
									<RiTelegram2Line size={30} />
								</Link>
							</li>
						</ul>
					</nav>
				</div>

				<div className={style['footer-newsletter']}>
					<h3>Subscribe to our newsletter</h3>
						<input type="text" placeholder="example@gmail.com" />
						<button>Submit</button>
				</div>
			</div>
		</>
	);
};

export default FooterTopContent;
