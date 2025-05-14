import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./ServicesSection.module.css";

export default function ServicesSection() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={styles.heading}>
              Services <br /> we offer at Nier
            </h2>
          </div>
          <div className={styles.bottom}></div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
