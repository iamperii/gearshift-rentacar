import style from './button.module.scss'
import facebook from '../../../assets/svg/facebook.svg'
import apple from '../../../assets/svg/apple.svg'
import google from '../../../assets/svg/google.svg';
import {Link} from 'react-router-dom'
const Button = () => {
	return (
		<>
			<div className={style.btnContainer}>
				<h1 className={style.title}>Log in via</h1>
				<nav className={style.socials}>
					<Link to="https://google.com" className={style.social}>
						<img src={facebook} alt="facebook-logo" />
					</Link>
					<Link to="https://google.com" className={style.social}>
						<img src={google} alt="google-logo" />
					</Link>
					<Link to="https://google.com" className={style.social}>
						<img src={apple} alt="apple-logo" />
					</Link>
				</nav>
				<div className={style.signContainer}>
					<p>Doesn’t have an account?</p>
					<Link to="/signup">Create Account</Link>
				</div>
			</div>
		</>
	);
};

export default Button;
