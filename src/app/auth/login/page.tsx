import Nav from "@/components/shared/Nav/Nav";
import LoginForm from "./components/LoginForm/LoginForm";
import styles from './Login.module.css'

 export default function LoginPage() {
   return (
     <main>
       <div className={styles.container}>
         <Nav redLogo navItemColor='var(--red)' signUpBtnType='navRedOutline' />
         <LoginForm />
       </div>
     </main>
   );
 }