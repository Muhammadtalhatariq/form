import React from 'react'
import Inputfield from '../components/inputfield'
import { Formik, Form,  } from 'formik';
import RadioField from '../components/RadioField';
import SelectField from '../components/SelectField';
import DatePicker from '../components/DatePicker';
import { validate } from '../components/validate';
import { useTheme } from '../Context/ThemeContext';
import { CiDark ,CiLight } from "react-icons/ci";
import Cheakbox from '../components/Cheakbox';

const SignupForm = () => {
  const [theme, setTheme] = useTheme()
  console.log(theme);
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
          date: null,
          ready: false,
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
          }, 2000);

        }
        }
        validateOnMount={true}
      >
        {formik => (
          <div className='flex flex-col items-center justify-center '>
            <div>
              <Form onSubmit={formik.handleSubmit}>
                <div className={`p-4 rounded-xl ${theme == "dark" ? "bg-neutral-700 border-2 border-white text-gray-400" : "bg-white  border border-black text-gray-400"}`}  >
                  <div className='flex items-center justify-center md:gap-10 gap-6 my-3'>
                    <h1 className='md:text-3xl text-xl text-center font-semibold'>Sign Up</h1>
                    <div className="relative">
                      <div
                        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                        className={` absolute left-10 -top-2 ${theme === "light" ? "" : "opacity-1"} cursor-pointer`}
                      >
                        <CiDark size={25} />
                      </div>
                      <div
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className={`w-[38px] absolute left-10 -top-2 ${theme === "light" ? "opacity-1" : ""} cursor-pointer `}
                      >
                        <CiLight size={25} />
                      </div>
                    </div>
                  </div>
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
                      label="Age :"
                      name="age"
                      type="number"
                    />
                    <div className='flex gap-4 items-center'>
                      <p className='font-medium '>Gender :</p>
                      <div name="gender" className='py-2 flex gap-4'>
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
                        <option value="pakistan">Pakistan</option>
                        <option value="other">other</option>
                      </SelectField>
                    </div>
                    <div className='md:flex md:gap-4'>
                      <label className='font-medium '>BOD : </label>
                      <DatePicker
                        type="date"
                        name="date"
                      />
                    </div>
                    <div>
                      <label className='flex gap-3 items-center'>
                        <Cheakbox name="ready" label="ready for submit" />
                      </label>
                    </div>
                  </div>
                  <div className='flex items-center gap-4 my-2 '>
                    <button type="button"
                      onClick={() => formik.resetForm()}
                      className='py-2 px-4 hover:bg-green-500 bg-green-200 rounded-xl font-semibold hover:text-white duration-500'>Reset</button>
                    <button
                      className='py-2 px-4 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-xl' type='submit'>
                      submit</button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        )}
      </Formik>
    </>
  )
}

export default SignupForm
