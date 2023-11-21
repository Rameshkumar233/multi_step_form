import React, { useContext } from "react";
import { FormContext } from "./FormControllers";

function Summary() {
    const { formik, longSubscription, selectedPrice, setCurrentStep } = useContext(FormContext);
    const { name, email, phoneNumber, selectedPlan, selectedAddOn } = formik.values;

    const addOn_1 = selectedAddOn.includes("Online service") ? (longSubscription ? 10 : 1) : null;
    const addOn_2 = selectedAddOn.includes("Larger storage") ? (longSubscription ? 20 : 2) : null;
    const addOn_3 = selectedAddOn.includes("Customizable Profile") ? (longSubscription ? 20 : 2) : null;

    const totalPrice = selectedPrice + addOn_1 + addOn_2 + addOn_3;

    return (
        <>
            <form
                onSubmit={formik.handleSubmit}
                className=''>
                <div className='mb-3'>
                    <h2 className='mb-1 text-xl xs:text-2xl'>Finishing up</h2>
                    <p>Double-check everything looks OK before confirming.</p>
                </div>
                <div className='bg-magnolia px-5 py-2 xs:w-96 lg:w-[445px]'>
                    <div className='pb-3 border-b-2'>
                        <div className='flex items-center text-sm xs:text-base'>
                            <span className='text-cool-gray mr-2 font-medium'>Name:</span>
                            <h5 className='pb-1'>{name}</h5>
                        </div>
                        <div className='flex items-center flex-wrap text-sm xs:text-base'>
                            <span className='text-cool-gray mr-2'>Email:</span>
                            <h5 className='pb-1'>{email}</h5>
                        </div>
                        <div className='flex items-center text-sm xs:text-base'>
                            <span className='text-cool-gray mr-2'>Phone Number:</span>
                            <h5 className='pb-1'>{phoneNumber}</h5>
                        </div>
                    </div>

                    <div className='py-3 border-b-2 flex-between items-end'>
                        <div>
                            <h4 className='text-base'>
                                {selectedPlan} ({longSubscription ? "Yearly" : "Monthly"})
                            </h4>
                            {/* <button type="button" className="text-cool-gray underline" onClick={() => setLongSubscription(!longSubscription)}>
                                Change
                            </button> */}
                        </div>
                        <p className='text-marine-blue font-bold'>
                            ${selectedPrice}
                            {longSubscription ? "/yr" : "/mo"}
                        </p>
                    </div>
                    {selectedAddOn ? (
                        <div className='space-y-2 pt-3'>
                            {selectedAddOn.map((addOn) => (
                                <div
                                    key={addOn}
                                    className='flex-between'>
                                    <h4 className='text-cool-gray text-base'>{addOn}</h4>
                                    <p className='text-marine-blue'>
                                        ${addOn === "Online service" && addOn_1}
                                        {addOn === "Larger storage" && addOn_2}
                                        {addOn === "Customizable Profile" && addOn_3}
                                        {longSubscription ? "/yr" : "/mo"}
                                    </p>
                                </div>
                            ))}
                        </div>
                    ) : null}
                </div>
                <div className='flex-between px-4 pt-4'>
                    <h4 className='text-cool-gray'>Total (per {longSubscription ? "year" : "month"})</h4>
                    <p className='text-purplish-blue font-bold text-lg'>
                        ${totalPrice}
                        {longSubscription ? "/yr" : "/mo"}
                    </p>
                </div>
            </form>
        </>
    );
}

export default Summary;
