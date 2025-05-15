import React, { useState, useEffect } from "react";
import Inputfield from "../components/InputField.jsx";
import { Formik, Form } from "formik";
import RadioField from "../components/RadioField.jsx";
import SelectField from "../components/SelectField.jsx";
import DatePicker from "../components/DatePicker.jsx";
import { validate } from "../components/validate";
import { useTheme } from "../Context/ThemeContext";
import { CiDark, CiLight } from "react-icons/ci";
import Cheakbox from "../components/Cheakbox";
import { ToastContainer, toast } from "react-toastify";
import { Spin } from "antd";
const countries = [
  { value: "us", label: "United States" },
  { value: "pak", label: "Pakistan" },
  { value: "other", label: "Other" },
];
const jobs = [
  { value: "intern", label: "Intern" },
  { value: "job", label: "Job" },
];

const SignupForm = () => {
  const [initialFormData, setInitialFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    age: "",
    gender: "",
    location: "",
    job: "",
    date: "",
    ready: false,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/4"
        );
        const data = await response.json();

        const mappedData = {
          firstName: data.name.split(" ")[0],
          lastName: data.name.split(" ")[1] || "",
          email: data.email,
          contact: "03023245670",
          age: 30,
          gender: "male",
          location: "us",
          job: "intern",
          date: "1990-01-01",
          ready: true,
        };

        setInitialFormData(mappedData);
      } catch (error) {
        alert("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const notify = () => toast("Form submit successfully");
  const [theme, setTheme] = useTheme();

  if (loading) {
     return (
      <div className="flex justify-center items-center h-screen">
        <Spin size="large" tip="Loading initial data..." />
      </div>
    );
  }

  return (
    <>
      <Formik
        initialValues={initialFormData}
        validationSchema={validate}
        onSubmit={(values) => {
          notify();
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
          }, 2000);
        }}
        enableReinitialize={true}
        validateOnMount={true}
      >
        {(formik) => (
          <div className="flex flex-col items-center justify-center ">
            <div>
              <Form onSubmit={formik.handleSubmit}>
                <div
                  className={`p-4 rounded-xl ${
                    theme == "dark"
                      ? "bg-neutral-700 border-2 border-white text-white"
                      : "bg-white  border border-black text-black"
                  }`}
                >
                  <div className="flex items-center justify-center md:gap-10 gap-6 my-3">
                    <h1 className="md:text-3xl text-xl text-center font-semibold">
                      Sign Up
                    </h1>
                    <div className="relative">
                      <div
                        onClick={() =>
                          setTheme(theme === "light" ? "dark" : "light")
                        }
                        className={` absolute left-10 -top-2 ${
                          theme === "light" ? "" : "opacity-1"
                        } cursor-pointer`}
                      >
                        <CiDark size={25} />
                      </div>
                      <div
                        onClick={() =>
                          setTheme(theme === "dark" ? "light" : "dark")
                        }
                        className={`w-[38px] absolute left-10 -top-2 ${
                          theme === "light" ? "opacity-1" : ""
                        } cursor-pointer `}
                      >
                        <CiLight size={25} />
                      </div>
                    </div>
                  </div>
                  <div className="mx-4 space-y-1 flex- flex-col items-center justify-center">
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
                    <Inputfield label="Email : " name="email" type="email" />
                    <Inputfield
                      label="Contact :"
                      name="contact"
                      type="number"
                    />
                    <Inputfield label="Age :" name="age" type="number" />
                    <p>Gender :</p>
                    <div className="flex gap-4 items-center">
                      <RadioField name="gender" />
                    </div>
                    <div>
                      <h1>Location :</h1>
                      <SelectField
                        name="location"
                        label="Select Country"
                        options={countries}
                        placeholder="Choose a country"
                        required
                      />
                      <div>
                        <h1>Job Type :</h1>
                        <SelectField
                          name="job"
                          label="Select job type"
                          options={jobs}
                          required
                        />
                      </div>
                    </div>
                    <div className=" md:gap-4">
                      <label>DOB : </label>
                      <DatePicker type="date" name="date" />
                    </div>
                    <div>
                      <label className="flex gap-3 items-center">
                        <Cheakbox name="ready" label="Ready for submit" />
                      </label>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 my-2 ">
                    <button
                      type="button"
                      onClick={() => formik.resetForm()}
                      className="py-2 px-4 hover:bg-green-500 bg-green-200 rounded-xl font-semibold hover:text-white duration-500 cursor-pointer"
                    >
                      Reset
                    </button>
                    <button
                      className="py-2 px-4 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-xl cursor-pointer"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                  <ToastContainer />
                </div>
              </Form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default SignupForm;