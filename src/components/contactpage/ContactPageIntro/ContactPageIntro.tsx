import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./ContactPageIntro.module.css";
import Nav from "@/components/shared/Nav/Nav";

export default function ContactPageIntro() {
  return (
    <section className={styles.container}>
      <Nav
        redLogo
        navItemColor='var(--red)'
        signUpBtnType='navRedOutline'
      />
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h1 className={styles.heading}>Lets Get In touch</h1>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
