import { RegisterFormSchemas } from '../../schemas/RegisterForm.js';
import style from './singUpInput.module.scss';
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import 'react-toastify/dist/ReactToastify.css';

const SignUpInput = () => {
	const navigate = useNavigate();
	const {
		values,
		errors,
		handleChange,
		handleSubmit,
		handleBlur,
		touched,
		isValid,
	} = useFormik({
		initialValues: {
			name: '',
			lastName: '',
			email: '',
			password: '',
			rePassword: '',
			term: false,
		},
		validationSchema: RegisterFormSchemas,
		onSubmit: (values, actions) => {
			const user = {
				firstName: values.name,
				lastName: values.lastName,
				email: values.email,
				password: values.password,
			};

			localStorage.setItem('user', JSON.stringify(user));
			toast.success('🎉 Signed up successfully!');
			actions.resetForm();
			setTimeout(() => {
				navigate('/login');
			}, 5000);
		},
		validateOnBlur: true,
		validateOnChange: false,
	});

	return (
		<div className={style.loginInput1}>
			<div className={style.signUp}>
				<h1 className={style.title}>Sign Up</h1>
				<form onSubmit={handleSubmit} className={style.signupForm}>
					<div className={style.nameSection}>
						<div className={style['input-box']}>
							<input
								type="text"
								placeholder="First Name"
								name="name"
								value={values.name}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{touched.name && errors.name && (
								<p className={style.error}>*{errors.name}</p>
							)}
						</div>
						<div className={style['input-box']}>
							<input
								type="text"
								placeholder="Last Name"
								name="lastName"
								value={values.lastName}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{touched.lastName && errors.lastName && (
								<p className={style.error}>*{errors.lastName}</p>
							)}
						</div>
					</div>

					<div>
						<input
							type="email"
							name="email"
							placeholder="Email Address"
							value={values.email}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						{touched.email && errors.email && (
							<p className={style.error}>*{errors.email}</p>
						)}
					</div>

					<div>
						<input
							type="password"
							name="password"
							placeholder="Enter Password"
							value={values.password}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						{touched.password && errors.password && (
							<p className={style.error}>*{errors.password}</p>
						)}
					</div>

					<div>
						<input
							type="password"
							name="rePassword"
							placeholder="Re Enter Password"
							value={values.rePassword}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						{touched.rePassword && errors.rePassword && (
							<p className={style.error}>*{errors.rePassword}</p>
						)}
					</div>

					<div className={style.checkBox}>
						<input
							type="checkbox"
							name="term"
							checked={values.term}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						<label htmlFor="">
							By Clicking on verify you agree with the terms & condition of the
							organization
						</label>
					</div>
					{touched.term && errors.term && (
						<p className={style.error}>*{errors.term}</p>
					)}

					<button
						type="submit"
						className={
							!isValid ||
							values.name === '' ||
							values.lastName === '' ||
							values.email === '' ||
							values.password === '' ||
							values.rePassword === '' ||
							values.term === false
								? style.signupBtn
								: style.canSignUp
						}
					>
						Sign up
					</button>
				</form>
			</div>
			<ToastContainer position="top-right" autoClose={3000} />
		</div>
	);
};

export default SignUpInput;
