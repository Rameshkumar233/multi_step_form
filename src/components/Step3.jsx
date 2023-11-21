import React, { useContext } from "react";
import checkMark from "../assets/icon-checkmark.svg";
import { FormContext } from "./FormControllers";

function Step3() {
    const { formik, longSubscription } = useContext(FormContext);
    const addOnOptions = [
        {
            title: "Online service",
            desc: "Access to multiplayer games",
            price: longSubscription ? 10 : 1,
        },
        {
            title: "Larger storage",
            desc: "Extra 1TB of cloud save",
            price: longSubscription ? 20 : 2,
        },
        {
            title: "Customizable Profile",
            desc: "Custom theme on your profile",
            price: longSubscription ? 30 : 3,
        },
    ];

    return (
        <>
            <form className=''>
                <div className='mb-4'>
                    <h2 className='mb-2 text-xl xs:text-2xl'>Pick add-ons</h2>
                    <p>Add-ons help enhance your gaming experience.</p>
                </div>
                <div className='xs:w-96 lg:w-[445px] overflow-y-auto max-h-72'>
                    {addOnOptions.map((option) => {
                        let { title, desc, price } = option;
                        let isSelected = formik.values.selectedAddOn.includes(title);
                        return (
                            <label
                                key={title}
                                htmlFor={title}
                                className={`mb-3 px-5 py-3 flex border-gray rounded-md cursor-pointer hover:border-purplish-blue ${isSelected && "border-blue bg-light-blue"}`}>
                                <input
                                    type='checkbox'
                                    name='selectedAddOn'
                                    id={title}
                                    onChange={formik.handleChange}
                                    value={title}
                                    checked={isSelected}
                                    className='hidden'
                                />
                                <div className='w-full flex-between'>
                                    <div className='flex-center'>
                                        <img
                                            src={checkMark}
                                            alt={title}
                                            className={`border-gray rounded p-1.5 ${isSelected && "bg-purplish-blue"}`}
                                        />
                                        <div className='ml-3'>
                                            <h5 className='text-sm xs:text-lg'>{title}</h5>
                                            <p className=''>{desc}</p>
                                        </div>
                                    </div>
                                    <p className='text-marine-blue font-medium'>
                                        ${price}
                                        {longSubscription ? "/yr" : "/mo"}
                                    </p>
                                </div>
                            </label>
                        );
                    })}
                </div>
            </form>
        </>
    );
}

export default Step3;
