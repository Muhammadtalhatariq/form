import React from 'react'
import Inputfield from '../components/inputfield'
import { Formik, Form, Field, } from 'formik';
import RadioField from '../components/RadioField';
import SelectField from '../components/SelectField';
import DatePicker from '../components/DatePicker';
import * as Yup from 'yup';

const validate = Yup.object({
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
    .min(11, 'Must be 11 characters')
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
  date: Yup.string()
    .required('Required'),

  ready: Yup.boolean()
    .required('Required')
    .oneOf([true], 'You must accept the terms and conditions.'),

})
const SignupForm = () => {

  return (
    <>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          age: '',
          email: '',
          contact: '',
          gender: '',
          job: '',
          loycation: '',
          date: "",
          ready: ''

        }}

        validationSchema={validate}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 3000);
        }
        }
        validateOnMount={true}
      >
        
        {formik => (
          <div className='flex items-center justify-center  bg-amber-50 border border-black rounded-b-2xl'>
            <Form onSubmit={formik.handleSubmit}>
              <div className='bg-gray-100 '>
                <h1 className='md:text-2xl text-xl text-center font-semibold'>Sign Up</h1>
                <div className='mx-4 '>
                  <Inputfield
                    label="First Name : "
                    name="firstName"
                    type="text"
                  />
                  <Inputfield
                    label="Last Name : "
                    name="lastName"
                    type="text"
                  />
                  <Inputfield
                    label="E-mail : "
                    name="email"
                    type="email"
                  />
                  <Inputfield
                    label="Contact :"
                    name="contact"
                    type="number"
                  />
                  <Inputfield
                    label="Age:"
                    name="age"
                    type="number"
                  />
                  <div className='flex gap-4 items-center'>
                    <p>Gender :</p>
                    <div className='py-2 flex gap-4'>
                      <RadioField
                        label="Male"
                        name="gender"
                        type="radio"
                        value="male"
                      />

                      <RadioField
                        label="female"
                        name="gender"
                        type="radio"
                        value="female"
                      />
                    </div>
                  </div>
                  <div>
                    <SelectField label="Job Type :" name="job">
                      <option value="">Select a job type</option>
                      <option value="intern">Intern</option>
                      <option value="job">Job</option>

                    </SelectField>
                  </div>
                  <div>
                    <SelectField label="Location :" name="location">
                      <option value="">Select your Location</option>
                      p<option value="pakistan">Pakistan</option>
                      <option value="other">other</option>
                    </SelectField>
                  </div>
                  <div>
                    <DatePicker
                      type="Date"
                      name="date"
                      value=""
                    />
                  </div>

                  <div>
                    <label className='flex gap-3 items-center'>
                      <Field type="checkbox" name="ready" />
                      <p>Ready For Submit</p>
                    </label>
                  </div>
                </div>
              </div>
              <div className='flex items-center gap-6 justify-center my-2 '>
                <button type="button"
                  onClick={() => formik.resetForm()}
                  className='py-2 px-4  hover:bg-green-500 bg-green-200 rounded-xl font-semibold hover:text-white duration-500'>Reset</button>
                <button
                  disabled={
                    !formik.isValid
                  }
                  className='py-2 px-4  hover:bg-green-500 bg-green-400 rounded-xl font-semibold hover:text-white duration-500' type='submit'> {formik.isSubmitting 
                    ? 'Loading…' 
                    : 'Submit'}</button>
              </div>
            </Form>
          </div>

        )}

      </Formik>

    </>
  )
}

export default SignupForm
