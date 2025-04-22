import React from 'react'
import { useField } from 'formik'
import { DatePicker, Input} from 'antd';

const DateField = ({ ...props }) => {
    const [field, meta] = useField(props)
    return (
        <>
            <div className='flex flex-col md:w-[400px] w-72'>
                {/* <DatePicker className='font-medium text-gray-400' {...field} {...props} /> */}
                  <Input className='font-medium text-gray-400' variant="filled" {...field} {...props} />
            </div>
            {meta.touched && meta.error ? (
                <div className="error text-red-500 text-sm pl-4">{meta.error}</div>
            ) : null}
        </>
    )
}

export default DateField
