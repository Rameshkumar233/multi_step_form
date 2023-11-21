import React, { useContext, useEffect } from "react";
import confirmation from "../assets/icon-thank-you.svg";
import { FormContext } from "./FormControllers";

function ConfirmationMsg() {
    const { currentStep, setCurrentStep, formik, setLongSubscription } = useContext(FormContext);
    useEffect(() => {
        setTimeout(() => {
            formik.resetForm();
            setLongSubscription(false);
            setCurrentStep(1);
        }, 10000);
    }, [currentStep]);

    return (
        <div className='py-6 px-4 h-full lg:w-[480px] flex-center flex-col max-w-lg'>
            <img
                src={confirmation}
                alt='Thank you'
                className='mb-7'
            />
            <div className='text-center'>
                <h2 className='text-3xl mb-2'>Thank you!</h2>
                <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
            </div>
        </div>
    );
}

export default ConfirmationMsg;
