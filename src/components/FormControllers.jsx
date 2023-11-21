import React, { createContext, useState } from "react";
import { useFormik } from "formik";
import Forms from "./Forms";

export const FormContext = createContext(null);

function FormControllers() {
    const [longSubscription, setLongSubscription] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedPrice, setSelectedPrice] = useState("");

    const handleSubscription = () => {
        setLongSubscription(!longSubscription);
    };

    const handleNextStep = () => {
        const { name, email, phoneNumber, selectedPlan } = formik.values;

        if (currentStep === 4) {
            localStorage.setItem(Object.keys(formik.values), Object.values(formik.values));
        }
        if (!name || !email || !phoneNumber) {
            return;
        } else if (currentStep === 2 && !selectedPlan) {
            return;
        } else {
            setCurrentStep((prev) => prev + 1);
        }
    };

    const handlePrevStep = () => {
        setCurrentStep((prev) => prev - 1);
    };
    const initialValues = {
        name: "",
        email: "",
        phoneNumber: "",
        selectedPlan: "",
        selectedAddOn: ["Online service"],
    };
    const onSubmit = (values) => {
        console.log("Form values", values);
    };

    const validate = (values) => {
        const errors = {};
        if (!values.name) {
            errors.name = "This field is required";
        }
        if (!values.email) {
            errors.email = "This field is required";
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-z]{2,4}$/.test(values.email)) {
            errors.email = "Invalid email format";
        }
        if (!values.phoneNumber) {
            errors.phoneNumber = "This field is required";
        }
        return errors;
    };

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate,
    });

    const value = {
        formik,
        currentStep,
        setCurrentStep,
        longSubscription,
        setLongSubscription,
        handleNextStep,
        handlePrevStep,
        handleSubscription,
        selectedPrice,
        setSelectedPrice,
    };
    return (
        <FormContext.Provider value={value}>
            <Forms />
        </FormContext.Provider>
    );
}

export default FormControllers;
