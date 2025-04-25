import React from 'react'
import { useField, Field, useFormikContext } from 'formik';
import { Radio } from 'antd'
import { useTheme } from '../Context/ThemeContext';

const RadioField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const { setFieldValue } = useFormikContext();
  const [theme, setTheme] = useTheme()
  const handleChange = (e) => {
     
    setFieldValue(field.name, e.target.value);
  };
  return (
    <>
      <div className='flex flex-col'>
        <div>
          <label className=' block' htmlFor={props.name}>
            <Radio.Group
               name={field.name}
               onChange={handleChange}
               value={field.value}
                
            >
              <Radio value="male"><span className={`${theme == "dark" ? " text-white" : " text-black"}`}>Male</span></Radio>
              <Radio  value="female"><span className={`${theme == "dark" ? " text-white" : " text-black"}`}>Female</span></Radio>
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
