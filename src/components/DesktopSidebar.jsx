import React, { useContext } from "react";
import Stepper from "./Stepper";
import { FormContext } from "./FormControllers";

function DesktopSidebar() {
    const { currentStep } = useContext(FormContext);
    return (
        <div className="w-56 h-[450px] bg-[url('/bg-sidebar-desktop.svg')] bg-cover bg-no-repeat rounded-lg">
            <Stepper currentStep={currentStep} />
        </div>
    );
}

export default DesktopSidebar;
