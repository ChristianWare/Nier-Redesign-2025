import styles from "./Services.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Image from "next/image";
import { services } from "@/data";
import Button from "@/components/shared/Button/Button";
import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";

export default function Services() {
  return (
    <section className={styles.container}>
      <SectionHeading title='What we do' />
      <LayoutWrapper>
        <div className={styles.top}>
          <h2 className={styles.heading}>Popular Services</h2>
          <p className={styles.copy}>
            Whether it&lsquo;s a simple airport transfer, special event, or
            girls night out, our black car service delivers the epitome of
            luxury and class. Book your next ride with us. Hare are some of the
            services we provide:
          </p>
          <div className={styles.topBtnContainer}>
            <Button btnType='black' href='/' text='All Services' />
          </div>
        </div>
        <div className={styles.bottom}>
          {services.slice(0, 4).map((x) => (
            <div key={x.id} className={styles.card}>
              <div className={styles.cardLeft}>
                <div className={styles.imgContainer}>
                  <Image
                    src={x.src}
                    alt={x.title}
                    fill
                    className={styles.img}
                  />
                </div>
              </div>
              <div className={styles.cardRight}>
                <div className={styles.cardRightTop}>
                  <h3 className={styles.title}>{x.title}</h3>
                </div>
                <div>
                  <p className={styles.desc}>{x.copy}</p>
                  <div className={styles.btnContainer}>
                    <Button text='Learn More' btnType='red' href='/' />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
}
