import React from 'react'
import Inputfield from '../components/inputfield'
import { Formik, Form, Field, } from 'formik';
import RadioField from '../components/RadioField';
import SelectField from '../components/SelectField';
import DatePicker from '../components/DatePicker';
import { validate } from '../components/validate';

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
          location: '',
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
          <div className='flex items-center justify-center'>
            <Form onSubmit={formik.handleSubmit}>
              <div className='bg-gray-100 p-4 rounded-xl '>
                <h1 className='md:text-3xl text-xl text-center font-semibold'>Sign Up</h1>
                <div className='mx-4 space-y-2 flex- flex-col items-center justify-center'>
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
                    <p className='font-medium text-gray-400'>Gender :</p>
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
                  <div className='flex gap-4 items-center justify-center'>
                    <label className='font-medium text-gray-400'>BOD : </label>
                    <DatePicker
                      type="date"
                      name="date"
                      onChange={formik.handleChange}
                      value={formik.values.firstName}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  <div>
                    <label className='flex gap-3 items-center'>
                      <Field type="checkbox" name="ready" />
                      <p className='font-medium text-gray-400'>Ready For Submit</p>
                    </label>
                  </div>
                </div>
              </div>
              <div className='flex items-center gap-6 justify-center my-2 '>
                <button type="button"
                  onClick={() => formik.resetForm()}
                  className='py-2 px-4  hover:bg-green-500 bg-green-200 rounded-xl font-semibold hover:text-white duration-500'>Reset</button>
                <button disabled={!formik.isValid}
                  className='py-2 px-4  hover:bg-green-500 bg-green-400 rounded-xl font-semibold hover:text-white duration-500' type='submit'> {formik.isSubmitting
                    ? 'Loading…' : 'Submit'}</button>
              </div>
            </Form>
          </div>
        )}
      </Formik>

    </>
  )
}

export default SignupForm
