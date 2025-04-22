import React from 'react'
import { useField } from 'formik'
const SelectField = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    return (
        <>
            <div className=' items-center justify-center  py-2 md:w-[500px] w-72 '>
                <label className='font-medium text-gray-400' htmlFor={props.name}>{label}</label>
                <select className='md:w-[400px] w-68 font-medium text-gray-400' {...field} {...props} />
            </div>
            {meta.touched && meta.error ? (
                <div className="error text-red-500 text-sm pl-4">{meta.error}</div>
            ) : null}
        </>
    )
}

export default SelectField
