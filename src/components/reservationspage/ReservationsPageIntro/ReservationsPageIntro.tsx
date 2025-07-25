import styles from "./ReservationsPageIntro.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Nav from "@/components/shared/Nav/Nav";

export default function ReservationsPageIntro() {
  return (
    <section className={styles.container}>
      <Nav redLogo navItemColor='var(--red)' signUpBtnType='navRedOutline' />
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h1 className={styles.heading}>Comming Soon!</h1>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
