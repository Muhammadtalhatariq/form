// import React from 'react'
// import { useField } from 'formik'

// const SelectField = ({ label, ...props }) => {
//     const [field, meta] = useField(props)
//     return (
//         <>
//             <div className='flex flex-col justify-center  md:w-[500px] w-72  '>
//                 <label className='' htmlFor={props.name}>{label}</label>

//                 <select className='md:w-[500px]  font-medium p-1 outline-none dark:text-black dark:bg-[#E2E2E2] ' {...field} {...props} />
//             </div>
//             {meta.touched && meta.error ? (
//                 <div className="error text-red-500 text-sm">{meta.error}</div>
//             ) : null}
//         </>
//     )
// }

// export default SelectField







import { Select, Form } from 'antd';
import { useField } from 'formik';

const { Option } = Select;

const SelectField = ({ label, options, required, ...props }) => {
    const [field, meta, helpers] = useField(props);
    const { name } = field;
    const { setValue, setTouched } = helpers;

    return (
        <div>
            <Form.Item
                variant="filled"
                validateStatus={meta.touched && meta.error ? 'error' : ''}
                help={meta.touched && meta.error ? meta.error : ''}
            >
                <div>
                    <Select
                        className='dark:bg-[#F0F0F0] dark:text-white'
                        variant="filled"
                        {...field}
                        {...props}
                        onChange={(value) => setValue(value)}
                        onBlur={() => setTouched(true)}
                        style={{ width: '100%' }}
                    >
                        {options.map((option) => (
                            <Option variant="filled" className='dark:bg-[#F0F0F0] dark:text-black' key={option.value} value={option.value}>
                                {option.label}
                            </Option>
                        ))}
                    </Select>
                </div>
            </Form.Item>
        </div>
    );
};

export default SelectField;
