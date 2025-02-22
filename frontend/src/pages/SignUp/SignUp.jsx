import style from './signUp.module.scss';
import SignUpInput from '../../components/SingUp/SignUpInput';
import Aside from '../../components/Aside/Aside';

const SignUp = () => {
	return (
		<>
			<div className={style.signUpPage}>
				<Aside />
				<SignUpInput />
			</div>
		</>
	);
};

export default SignUp;
