import React from 'react'
import {  useField } from 'formik'
const SelectField = ({ label, ...props }) => {

    const [field, meta] = useField(props)
    return (
        <>

            <div className='flex gap-4 py-4 '>
                <label  htmlFor={props.name}>{label}</label>
                <select {...field} {...props} />
                {meta.touched && meta.error ? (
                    <div className="error">{meta.error}</div>
                ) : null}
            </div>
        </>
    )
}

export default SelectField
