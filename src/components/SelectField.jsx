import React from 'react'
import { useField } from 'formik'

const SelectField = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    return (
        <>
            <div className='flex flex-col justify-center  md:w-[500px] w-72  '>
                <label className='' htmlFor={props.name}>{label}</label>
                <select className='md:w-[500px]  font-medium p-1 outline-none dark:text-black dark:bg-[#E2E2E2] ' {...field} {...props} />
            </div>
            {meta.touched && meta.error ? (
                <div className="error text-red-500 text-sm">{meta.error}</div>
            ) : null}
        </>
    )
}

export default SelectField
