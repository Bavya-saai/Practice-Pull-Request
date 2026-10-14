import AuthLayout from "../../Layout/AuthLayout";
import ResetSuccessfullImg from "../../Assets/ResetSuccessfulImg.png";
import { RoundTick } from "../../Components/StatecardIcons";
import Button from "../../Components/Button";
import { useNavigate } from "react-router-dom";
import styles from "../../CSS/Pages/AuthPages/ResetSuccessfull.module.css";

export default function ResetSuccessfull() {
  const navigate = useNavigate();

  return (
    <AuthLayout backgroundImage={ResetSuccessfullImg}>
      <div className={styles.resetSuccessContainer}>

        <div className={styles.roundTickIcon}>
          {/* <RoundTick /> */}
           <span className={styles.tickMark}>✓</span>
        </div>

        <h2 className={styles.resetSuccessTitle}>
          Password Reset
          <br />
          Successful!
        </h2>

      </div>
    </AuthLayout>
  );
}