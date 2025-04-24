import React from 'react'
import { useField } from 'formik';
import { Input } from 'antd';

const Inputfield = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <div className='flex flex-col md:w-[500px] w-72'>
                <label className='font-medium text-gray-400' htmlFor={props.name}>{label}</label>
                    <Input variant="filled" {...field} {...props} />
            </div>
            {meta.touched && meta.error ? (
                <div className="error text-red-500 text-sm">{meta.error}</div>
            ) : null}
        </>
    )
}

export default Inputfield
