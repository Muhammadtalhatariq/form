import React from 'react'
import { useField } from 'formik';
import { Input } from 'antd';

const Inputfield = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <div className='flex flex-col md:w-[500px] w-72'>
                <label className='' htmlFor={props.name}>{label}</label>
                <div className='dark:bg-[#F0F0F0] dark:text-black'>
                <Input variant="filled" {...field} {...props} />
                </div>           
            </div>
            {meta.touched && meta.error ? (
                <div className="error text-red-500 text-sm">{meta.error}</div>
            ) : null}
        </>
    )
}

export default Inputfield
