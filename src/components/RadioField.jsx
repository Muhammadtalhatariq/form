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
      <div className=''>
      <div>
           <Radio.Group
               name={field.name}
               onChange={handleChange}
               value={field.value}
                
            >
              <Radio value="male"><span className={`${theme == "dark" ? " text-white" : " text-black"}`}>Male</span></Radio>
              <Radio  value="female"><span className={`${theme == "dark" ? " text-white" : " text-black"}`}>Female</span></Radio>
            </Radio.Group>     
        </div>
        <div>
          <label htmlFor={props.name}> </label>
          <div>
          {meta.touched && meta.error ? (
            <div className="error block text-red-500 text-sm">{meta.error}</div>
          ) : null}
        </div>
      </div>
      </div>
    </>
  )
}

export default RadioField
