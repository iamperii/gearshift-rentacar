import * as yup from 'yup';

export const RegisterFormSchemas = yup.object().shape({
	name: yup.string().required('Name is required'),
	lastName: yup.string().required('Last Name is required'),
	email: yup.string().email('Email is invalid').required('Email is required'),
	password: yup.string().required('Password is required'),
	rePassword: yup
		.string()
		.required('Re-enter password is required')
		.oneOf(
			[yup.ref('password', yup.password)],
			'Re-password must be same with password'
		),
	term: yup.boolean().required('Please click the checkbox'),
});
