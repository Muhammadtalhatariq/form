import React from 'react'
import { useField } from 'formik'
import { DatePicker, Input } from 'antd';

const DateField = ({ ...props }) => {
  const [field, meta] = useField(props)
  return (
    <>
      <div className='md:flex md:flex-col md:w-[500px] w-72'>
        <div>
          <Input className='font-medium w-68 text-gray-400' variant="filled" {...field} {...props} />
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

export default DateField
