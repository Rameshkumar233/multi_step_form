import React, { useContext } from "react";
import { FormContext } from "./FormControllers";

function Step1() {
    const { formik } = useContext(FormContext);
    const { touched, errors } = formik;

    return (
        <form>
            <div className='mb-3'>
                <h2 className='mb-1 text-xl xs:text-2xl'>Personal Info</h2>
                <p>Please provide your name, email address, and phone number.</p>
            </div>
            <div className='mb-4 lg:w-[445px] xs:w-96'>
                <div className='pb-2 flex-between'>
                    <label
                        htmlFor='name'
                        className='text-marine-blue font-medium'>
                        Name
                    </label>
                    <span>{touched.name && errors.name ? <div className='text-red-700 font-medium'>{errors.name}</div> : null}</span>
                </div>
                <input
                    type='text'
                    name='name'
                    id='name'
                    placeholder='e.g. Stephen King'
                    {...formik.getFieldProps("name")}
                    className={`w-full px-4 py-2 border-gray rounded-md focus:border-marine-blue outline-none 
                    ${touched.name && errors.name && "border-error"}`}
                />
            </div>
            <div className='mb-4'>
                <div className='pb-2 flex-between'>
                    <label
                        htmlFor='email'
                        className='text-marine-blue font-medium'>
                        Email Address
                    </label>
                    <span>{touched.email && errors.email ? <div className='text-red-700 font-medium'>{errors.email}</div> : null}</span>
                </div>
                <input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='e.g. stephenking@lorem.com'
                    {...formik.getFieldProps("email")}
                    className={`w-full px-4 py-2 border-gray rounded-md focus:border-marine-blue outline-none ${touched.email && errors.email && "border-error"}`}
                />
            </div>
            <div>
                <div className='pb-2 flex-between'>
                    <label
                        htmlFor='phoneNumber'
                        className='text-marine-blue font-medium'>
                        Phone Number
                    </label>
                    <span>{touched.phoneNumber && errors.phoneNumber ? <div className='text-red-700 font-medium'>{errors.phoneNumber}</div> : null}</span>
                </div>
                <input
                    type='text'
                    name='phoneNumber'
                    id='phoneNumber'
                    placeholder='e.g. +1 234 567 890'
                    {...formik.getFieldProps("phoneNumber")}
                    className={`w-full px-4 py-2 border-gray rounded-md focus:border-marine-blue outline-none ${touched.phoneNumber && errors.phoneNumber && "border-error"}`}
                />
            </div>
        </form>
    );
}

export default Step1;
