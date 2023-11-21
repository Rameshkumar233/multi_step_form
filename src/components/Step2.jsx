import React, { useContext } from "react";
import { FormContext } from "./FormControllers";

import arcade from "../assets/icon-arcade.svg";
import advanced from "../assets/icon-advanced.svg";
import pro from "../assets/icon-pro.svg";

function Step2() {
    const { formik, longSubscription, handleSubscription, setSelectedPrice } = useContext(FormContext);

    const planOptions = [
        {
            icon: `${arcade}`,
            planName: "Arcade",
            price: longSubscription ? 90 : 9,
        },
        {
            icon: `${advanced}`,
            planName: "Advanced",
            price: longSubscription ? 120 : 12,
        },
        {
            icon: `${pro}`,
            planName: "Pro",
            price: longSubscription ? 150 : 15,
        },
    ];

    return (
        <form>
            <div className='mb-4'>
                <h2 className='mb-1 text-xl xs:text-2xl'>Select your plan</h2>
                <p className=''>You have the option of monthly or yearly billing.</p>
            </div>
            <div className='xs:w-96 lg:w-[445px] lg:flex lg:gap-5'>
                {planOptions.map((option) => {
                    let { planName, icon, price } = option;
                    let isSelected = formik.values.selectedPlan === planName;

                    return (
                        <label
                            key={planName}
                            htmlFor={planName}
                            className={`mb-2 px-4 lg:w-[134px] flex lg:flex-col lg:items-start border-gray rounded-md hover:border-purplish-blue cursor-pointer ${isSelected && "border-blue bg-light-blue"} 
                           ${longSubscription ? "py-2 lg:py-3" : "py-3"}`}>
                            <input
                                type='radio'
                                name='selectedPlan'
                                id={planName}
                                value={planName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                checked={isSelected}
                                className='appearance-none'
                                onClick={() => setSelectedPrice(price)}
                            />
                            <img
                                src={icon}
                                alt={planName}
                                className='lg:pb-7'
                            />
                            <div className='ml-5 lg:ml-0'>
                                <h4 className='font-semibold xs:text-xl'>{planName}</h4>
                                <p className='font-bold pb-1'>
                                    ${price}
                                    {longSubscription ? "/yr" : "/mo"}
                                </p>
                                {longSubscription && planName !== "Arcade" ? <p className='text-xs text-marine-blue font-medium '>2 months free </p> : null}
                            </div>
                        </label>
                    );
                })}
            </div>
            <label
                htmlFor='subscription'
                className='py-2 mt-5 flex-center gap-6 bg-magnolia lg:mb-4'>
                <span className={`font-bold transition-all duration-1000 ${longSubscription ? "text-cool-gray" : "text-marine-blue"}`}>Monthly</span>
                <input
                    type='checkbox'
                    name='subscription'
                    id='subscription'
                    onChange={formik.handleChange}
                    onClick={handleSubscription}
                    checked={longSubscription}
                    className='w-10 h-6 bg-marine-blue rounded-full outline-none appearance-none'
                />
                <div className={`absolute w-3.5 h-3.5 bg-white rounded-full ${longSubscription && "translate-x-4"} transition-all duration-1000`}></div>
                <span className={`font-bold transition-all duration-1000 ${longSubscription ? "text-marine-blue" : "text-cool-gray"}`}>Yearly</span>
            </label>
        </form>
    );
}

export default Step2;
