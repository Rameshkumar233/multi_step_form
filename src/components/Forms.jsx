import React, { useContext } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Summary from "./Summary";
import ConfirmationMsg from "./ConfirmationMsg";
import DesktopSidebar from "./DesktopSidebar";
import MobileSideBar from "./MobileSideBar";
import StepControls from "./StepControls";
import { FormContext } from "./FormControllers";

function Forms() {
    const { currentStep } = useContext(FormContext);

    const handleStep = () => {
        switch (currentStep) {
            case 1:
                return <Step1 />;
            case 2:
                return <Step2 />;
            case 3:
                return <Step3 />;
            case 4:
                return <Summary />;
            case 5:
                return <ConfirmationMsg />;
            default:
                return null;
        }
    };

    return (
        <section className='bg-light-blue bg-opacity-70 '>
            <div className='h-screen'>
                {/* For Mobile View */}
                <MobileSideBar />
                <div className='flex-center'>
                    <div className='mx-5 bg-alabaster absolute top-[100px] rounded-xl shadow-xl lg:w-[820px] lg:static lg:mt-20 lg:flex lg:gap-8'>
                        {/* For Desktop View */}
                        <div className='p-3 hidden lg:block'>
                            <DesktopSidebar />
                        </div>
                        <div className='flex-between flex-col'>
                            {/* Forms */}
                            <div className='px-6 py-5'>{handleStep()}</div>
                            {/* Step controls for desktop */}
                            <div className={`pb-4 hidden lg:block ${currentStep === 5 && "lg:hidden"}`}>
                                <StepControls />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Step controls for mobile */}
                <div className='bg-alabaster lg:hidden absolute w-full bottom-0'>
                    <StepControls />
                </div>
            </div>
        </section>
    );
}

export default Forms;
