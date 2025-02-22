import style from './login.module.scss';
import LoginInput from '../../components/Login/LoginInput';
import Aside from '../../components/Aside/Aside';

const Login = () => {
	return (
		<>
			<div className={style.loginPage}>
				<Aside />

				<LoginInput />
			</div>
		</>
	);
};

export default Login;
