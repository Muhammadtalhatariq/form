import React from 'react'
import { Field } from 'formik';

const Cheakbox = ({ label, }) => {
  return (
    <>
      <div role="group" aria-labelledby="checkbox-group">
        <label >
          <Field type="checkbox" />
          {label}
        </label>
      </div>

    </>
  )
}

export default Cheakbox
