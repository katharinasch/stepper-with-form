import { useState, createContext, useContext, useEffect } from "react";
import { useRouter } from 'next/router';

export const FormContext = createContext();

export function FormProvider({ children }) {
  const router = useRouter();
  const [data, setData] = useState({});
  const [formStep, setFormStep] = useState(router.query.step ?? 0);
  const [steps, setStepsData] = useState([
    { name: 'Vertrag', status: 'current' },
    { name: 'Dateneingabe', status: 'upcoming' },
    { name: 'Bestätigung', status: 'upcoming' },
  ]);

  
  const setFormValues = (values) => {
    setData((prevValues) => ({
      ...prevValues,
      ...values,
    }));
  };

  useEffect(() => { 
    router.push(`/?step=${formStep}`), setFormStep(formStep) }, [formStep]);
  console.log(router.query.step)

  const nextFormStep = (contract='') => {
    setStepsData((prevState) =>
      prevState.map((step) =>
        step.name ===
        (prevState[formStep]
          ? prevState[formStep].name
          : "")
          ? { ...step, status: "complete" }
          : step.name === (prevState[formStep + 1] ? prevState[formStep + 1].name : "")
          ? { ...step, status: "current" }
          : step
      )
    );
    
    setFormStep((formStep) => formStep + 1);
    setFormValues({ contract });
  };

  const prevFormStep = () => {
    setStepsData((prevState) =>
      prevState.map((step) =>
        step.name ===
        (prevState[formStep]
          ? prevState[formStep].name
          : "")
          ? { ...step, status: "upcoming" }
          : step.name === (prevState[formStep - 1] ? prevState[formStep - 1].name : "")
          ? { ...step, status: "current" }
          : step
      )
    );
    setFormStep((formStep) => formStep - 1);
  };


  return (
    <FormContext.Provider value={{ data, setFormValues, nextFormStep, prevFormStep, setFormStep, steps, formStep }}>
      {children}
    </FormContext.Provider>
  );
}

export default FormContext;
export const useFormData = () => useContext(FormContext);
