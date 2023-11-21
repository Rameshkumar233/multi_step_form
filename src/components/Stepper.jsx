import React, { useContext } from "react";
import { FormContext } from "./FormControllers";

function Stepper() {
    const { currentStep } = useContext(FormContext);

    return (
        <div className='pt-8 lg:pl-5 text-white flex-center gap-5 lg:flex-col lg:items-start'>
            <div className='flex-center'>
                <div className={`stepper-style ${currentStep === 1 ? "text-black bg-light-blue" : null}`}>1</div>
                <div className='ml-3 uppercase hidden lg:block'>
                    <h5 className='text-xs text-cool-gray'>step 1</h5>
                    <span className='text-sm tracking-wider font-medium'>Your Info</span>
                </div>
            </div>
            <div className='flex-center'>
                <div className={`stepper-style ${currentStep === 2 ? "text-black bg-light-blue" : null}`}>2</div>
                <div className='ml-3 uppercase hidden lg:block'>
                    <h5 className='text-xs text-cool-gray'>step 2</h5>
                    <span className='text-sm tracking-wider font-medium'>Select Plan</span>
                </div>
            </div>
            <div className='flex-center'>
                <div className={`stepper-style ${currentStep === 3 ? "text-black bg-light-blue" : null}`}>3</div>
                <div className='ml-3 uppercase hidden lg:block'>
                    <h5 className='text-xs text-cool-gray'>step 3</h5>
                    <span className='text-sm tracking-wider font-medium'>Add-ons</span>
                </div>
            </div>
            <div className='flex-center'>
                <div className={`stepper-style ${currentStep === 4 || currentStep === 5 ? "text-black bg-light-blue" : null}`}>4</div>
                <div className='ml-3 uppercase hidden lg:block'>
                    <h5 className='text-xs text-cool-gray'>step 4</h5>
                    <span className='text-sm tracking-wider font-medium'>Summary</span>
                </div>
            </div>
        </div>
    );
}

export default Stepper;
