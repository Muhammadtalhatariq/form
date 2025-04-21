import React from 'react'
import { useField } from 'formik';
import { Input } from 'antd';

const Inputfield = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <div className='flex flex-col md:w-[500px] w-72'>
                <label htmlFor={props.name}>{label}</label>
                <div className='py-2'>
                    <Input variant="filled"   {...field} {...props} />
                </div>
            </div>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    )
}

export default Inputfield
