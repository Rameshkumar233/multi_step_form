import React, { useContext } from "react";
import Stepper from "./Stepper";
import { FormContext } from "./FormControllers";

function MobileSideBar() {
    const { currentStep } = useContext(FormContext);
    return (
        <>
            <div className="h-[160px] bg-[url('/bg-sidebar-mobile.svg')] bg-no-repeat bg-cover lg:hidden block">
                <Stepper currentStep={currentStep} />
            </div>
        </>
    );
}

export default MobileSideBar;
