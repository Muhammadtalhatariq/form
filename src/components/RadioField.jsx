import React from 'react'
import { useField, Field, useFormikContext } from 'formik';
import { Radio } from 'antd'
const RadioField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const { setFieldValue } = useFormikContext();

  const handleChange = (e) => {
    setFieldValue(field.name, e.target.value);
  };
  return (
    <>
      <div className='flex flex-col'>
        <div>
          <label className=' block font-medium text-gray-400' htmlFor={props.name}>
            <Radio.Group
               name={field.name}
               onChange={handleChange}
               value={field.value}
            >
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
            </Radio.Group>
          </label>
        </div>
        <div>
          {meta.touched && meta.error ? (
            <div className="error block text-red-500 text-sm">{meta.error}</div>
          ) : null}
        </div>
      </div>
    </>
  )
}

export default RadioField
