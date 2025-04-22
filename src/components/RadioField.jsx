import React from 'react'
import { useField, Field } from 'formik';
;
const RadioField = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
          <div className='flex flex-col'>
          <div>
           <label className=' block font-medium text-gray-400' htmlFor={props.name}>
                <Field  {...field} {...props} /> {label}
            </label>
           </div>
          <div>
          {meta.touched && meta.error ? (
                <div className="error block text-red-500 text-sm pl-4">{meta.error}</div>
            ) : null}
          </div>
          </div>
        </>
    )
}

export default RadioField
