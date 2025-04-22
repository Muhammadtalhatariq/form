import React from 'react'
import { useField, Field } from 'formik';
;
const RadioField = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label className='font-medium text-gray-400' htmlFor={props.name}>
                <Field  {...field} {...props} /> {label}
            </label>
            {meta.touched && meta.error ? (
                <div className="error text-red-500 text-sm pl-4">{meta.error}</div>
            ) : null}
        </>
    )
}

export default RadioField
