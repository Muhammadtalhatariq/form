import React from 'react'
import { useField, Field } from 'formik';
;
const RadioField = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.name}>
                <Field  {...field} {...props} /> {label}
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    )
}

export default RadioField
