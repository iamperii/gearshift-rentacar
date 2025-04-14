import { useAuth } from '../../context/AuthContext';
import Button from './Button/Button';
import style from './loginInput.module.scss';
import { Link, useNavigate } from 'react-router-dom';

const LoginInput = () => {
	const { login } = useAuth();
	const navigate = useNavigate();

	const handleLogin = (e) => {
		const fakeToken = 'abc123';
		login(fakeToken);
		navigate('/');
		e.preventDefault();
		console.log('logged');
	};
	return (
		<>
			<div className={style.loginInput1}>
				<div className={style.loginInput}>
					<h1 className={style.title}>Log In</h1>
					<form action="" className={style.loginForm}>
						<input
							type="email"
							className={style.input}
							placeholder="Email"
							required
						/>
						<input
							type="password"
							className={style.input}
							placeholder="Password"
							required
						/>
						<div className={style.remember}>
							<div className={style.checkboxContainer}>
								<input type="checkbox" id="rememberMe" />
								<label htmlFor="rememberMe">Remember me</label>
							</div>

							<div className={style.forgot}>
								<Link to={'/forgot-password'}>Forgot Password</Link>
							</div>
						</div>

						<button
							type="submit"
							className={style.loginBtn}
							onClick={handleLogin}
						>
							Log In
						</button>
					</form>
					<div className={style.line}> </div>
					<Button />
				</div>
			</div>
		</>
	);
};

export default LoginInput;
