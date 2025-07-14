import Nav from "@/components/shared/Nav/Nav";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import styles from "./Register.module.css";

const RegisterPage = () => {
  return (
    <main>
      <div className={styles.container}>
        <Nav redLogo navItemColor='var(--red)' signUpBtnType='navRedOutline' />
        <RegisterForm />
      </div>
    </main>
  );
};
export default RegisterPage;
