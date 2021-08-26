import { useFormData } from "../../context";
import { useState } from "react";



export default function PersonalInfo() {
  const { formStep, nextFormStep,  prevFormStep } = useFormData();

  const handleSubmit = (values) => {
    setFormValues(values);
    nextFormStep();
    prevFormStep();
  };

  

  return (
    <div className={formStep === 1 ? 'block' : 'hidden'}>
        <h1>STEP 2</h1>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
          <div className="rounded-md shadow">
            <a role="button" tabIndex={0}
              onClick={prevFormStep}
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-500 hover:bg-yallow-600 md:py-4 md:text-lg md:px-10"
            >
              Back
            </a>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <a
              //onClick={nextQuizStep}
              onClick={nextFormStep}
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-500 hover:bg-yallow-600 md:py-4 md:text-lg md:px-10"
            >
              Next
            </a>
          </div>
        </div>
      </div>

  );
}