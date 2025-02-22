import style from './singUpInput.module.scss';

const SignUpInput = () => {
	const handleSignUp = (e) => {
		e.preventDefault();
		console.log('signed');
	};
	return (
		<>
			<div className={style.loginInput1}>
				<div className={style.signUp}>
					<h1 className={style.title}>Sign Up</h1>
					<form action="" className={style.signupForm}>
						<div className={style.nameSection}>
							<input type="text" placeholder="First Name" />
							<input type="text" placeholder="Last Name" />
						</div>
						<input type="email" placeholder="Email Address" />
						<input type="password" placeholder="Enter Password" />
						<input type="password" placeholder="Re Enter Password" />
						<div className={style.checkBox}>
							<input type="checkbox" />
							<label htmlFor="">
								By Clicking on verify you agree with the terms & condition of
								the organization
							</label>
						</div>
						<button
							type="submit"
							className={style.signupBtn}
							onClick={handleSignUp}
						>
							Send Verification Code
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default SignUpInput;
