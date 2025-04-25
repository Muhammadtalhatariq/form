import * as Yup from 'yup';

export const validate = Yup.object({
  firstName: Yup.string()
    .matches(/^[A-Za-z]+$/, 'Only alphabets are allowed')
    .required('Please enter your first name'),
  lastName: Yup.string()
    .matches(/^[A-Za-z]+$/, 'Only alphabets are allowed')
    .required('Please enter your last name'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Please enter your email address'),
  contact: Yup.string()
    .min(11, 'Must be 11 characters')
    .required('Please enter your contact number'),
  age: Yup.string()
    .required('Please enter your age'),
  gender: Yup.string()
    .oneOf(
      ['male', 'female'],
      'Invalid Gender Type'
    )
    .required('Please select your gender'),
  job: Yup.string()
    .oneOf(
      ['intern', 'job'],
      'Invalid Job Type'
    )
    .required('Please select your job type'),
  location: Yup.string()
    .oneOf(
      ['pakistan', 'other'],
      'Invalid location'
    )
    .required('Please select your location'),
  date: Yup.mixed()
    .required('Please enter your date of birth'),

  ready: Yup.boolean()
    .required('Required.')
    .oneOf([true], 'You must accept the terms and conditions.'),
})