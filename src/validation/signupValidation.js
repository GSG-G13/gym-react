import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  age: Yup.number().required('Age is required').positive('Age must be a positive number').typeError('must be a number'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  gender: Yup.string().required('Gender is required'),
  height: Yup.number().required('Height is required').positive('Height must be a positive number').typeError('must be a number'),
  weight: Yup.number().required('Weight is required').positive('Weight must be a positive number').typeError('must be a number'),
  goalWeight: Yup.number().required('Goal weight is required').positive('Goal weight must be a positive number').typeError('must be a number'),
  password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
});

export default validationSchema;
