import * as Yup from 'yup';

export const validate = Yup.object({
  firstName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  lastName: Yup.string()
    .max(10, 'Must be 10 characters or less')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  contact: Yup.string()
    .min(11, 'Must be 11 characters ')
    .max(15, "15 characters or less")
    .required('Required'),
  age: Yup.string()
    .required('Required'),
  gender: Yup.string()
    .oneOf(
      ['male', 'female'],
      'Invalid Gender Type'
    )
    .required('Required'),
  job: Yup.string()
    .oneOf(
      ['intern', 'job'],
      'Invalid Job Type'
    )
    .required('Required'),
  location: Yup.string()
    .oneOf(
      ['pakistan', 'other'],
      'Invalid location'
    )
    .required('Required'),
  date: Yup.mixed()
    .required('Required'),

  ready: Yup.boolean()
    .required('Required.')
    .oneOf([true], 'You must accept the terms and conditions.'),
})