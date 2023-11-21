import React, { useContext } from "react";
import { FormContext } from "./FormControllers";

function StepControls() {
    const { formik, currentStep, handleNextStep, handlePrevStep } = useContext(FormContext);

    return (
        <>
            <section className='px-10 py-3 lg:px-8 lg:py-0'>
                {currentStep === 5 ? null : (
                    <form
                        onSubmit={formik.handleSubmit}
                        className={`w-full flex ${currentStep === 1 ? "justify-end" : "justify-between"} items-center`}>
                        {currentStep > 1 && (
                            <button
                                type='button'
                                className='font-bold text-cool-gray hover:text-marine-blue'
                                onClick={handlePrevStep}>
                                Go Back
                            </button>
                        )}
                        <button
                            type={currentStep === 4 ? "submit" : "button"}
                            className={`px-4 py-2 text-white bg-marine-blue rounded hover:bg-blue-900 ${currentStep === 4 && "bg-purplish-blue hover:bg-indigo-800"}`}
                            onClick={handleNextStep}>
                            {currentStep === 4 ? "Confirm" : "Next Step"}
                        </button>
                    </form>
                )}
            </section>
        </>
    );
}

export default StepControls;
