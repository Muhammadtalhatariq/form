import React from 'react'
import { Field } from 'formik';
import { useField } from 'formik';
const Cheakbox = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <>
      <div className='flex flex-col' role="group" aria-labelledby="checkbox-group ">
        <label className='flex gap-4 '>
          <Field type="checkbox" checked={field.value} {...field} {...props} />
          <div className='mx-4 '> {label}</div>
        </label>
        <div>
          {meta.touched && meta.error ? (
            <div className="error text-red-500 text-sm">{meta.error}</div>
          ) : null}
        </div>
      </div>

    </>
  )
}

export default Cheakbox
