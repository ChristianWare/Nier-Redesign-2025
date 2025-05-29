import styles from "./Areas.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Button from "@/components/shared/Button/Button";
import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";

const statsData = [
  {
    id: 1,
    number: "20+",
    detail: "Years of Experience",
  },
  {
    id: 2,
    number: "15k",
    detail: "Hours on the road",
  },
  {
    id: 3,
    number: "154k",
    detail: "Happy clients",
  },
];

export default function Areas() {
  return (
    <section className={styles.container}>
      <SectionHeading title='About Us' />
      <div className={styles.imgContainer}>
        <LayoutWrapper>
          <div className={styles.content}>
            <h2 className={styles.heading}>
              At Nier <br /> we change <br /> what Transportation <br /> means
              to you.
            </h2>
            <div className={styles.contentMiddle}></div>
            <div className={styles.contentBottom}>
              <div></div>
              <div className={styles.subHeadingCopyContainer}>
                <span className={styles.subHeading}>Our Story</span>
                <p className={styles.copy}>
                  Founded in 2004, Nier Transportation was born out of a passion
                  for delivering exceptional transportation experiences. Our
                  journey began with a single luxury vehicle, and today, we have
                  a large fleet of cars, serving hundreds of satisfied clients.
                </p>
                <div className={styles.btnContainer}>
                  <Button text='More About Us' btnType='nav' href='/' />
                </div>
              </div>
            </div>
            <div className={styles.stats}>
              {statsData.map((x) => (
                <div className={styles.statContainer} key={x.id}>
                  <span className={styles.number}>{x.number}</span>
                  <p className={styles.detail}>{x.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </LayoutWrapper>
      </div>
    </section>
  );
}
