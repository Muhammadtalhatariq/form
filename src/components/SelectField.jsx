import React from 'react'
import { useField } from 'formik'

const SelectField = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    return (
        <>
            <div className='flex flex-col justify-center py-2 md:w-[500px] w-72  '>
                <label className='font-medium text-gray-400' htmlFor={props.name}>{label}</label>
                <select className='md:w-[500px]  font-medium text-gray-400 p-1 outline-none bg-[#F0F0F0] rounded-lg' {...field} {...props} />
            </div>

            {meta.touched && meta.error ? (
                <div className="error text-red-500 text-sm">{meta.error}</div>
            ) : null}
        </>
    )
}

export default SelectField
