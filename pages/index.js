import Head from "next/head";
import styles from "../styles/styles.module.scss";
import Stepper from "../components/Stepper";
import { useFormData } from "../context";




import {
  PersonalInfo,
  ConfirmPurchase,
  ContractInfo,
} from "../components/Forms";


const App = () => {
  const { formStep} = useFormData();
 
  return (
    <div>
      <Head>
        <title>Next.js Multi Step Form</title>
      </Head>
      <Stepper />
        <div className={styles.container}>
        {
            {
              0: <ContractInfo />,
              1: <PersonalInfo />,
              2: <ConfirmPurchase />,
            }[formStep]
          }
        </div>
    </div>
  );
};

export default App;