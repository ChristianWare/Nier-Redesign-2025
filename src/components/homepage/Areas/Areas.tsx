import styles from "./Areas.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Image from "next/image";
import ImgBg from "../../../../public/images/cadi.jpg";
import ImgA from "../../../../public/images/specialevents.jpg";
import ImgB from "../../../../public/images/distance.jpg";
import BookingButton from "../BookingButton/BookingButton";

const statsData = [
  {
    id: 1,
    number: "20",
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
      <div className={styles.imgContainer}>
        <div className={styles.imgOverlay} />
        <Image
          src={ImgBg}
          alt='map of Arizona'
          priority
          fill
          className={styles.img}
        />
        <LayoutWrapper>
          <div className={styles.content}>
            <div className={styles.contentTop}>
              <h2 className={styles.heading}>
                At Nier
                <span className={styles.inlineImage1}>
                  <Image
                    src={ImgA}
                    alt='Sedona'
                    fill
                    className={styles.imgii}
                  />
                </span>
                we <br />
                change what <br />
                Transportation
                <span className={styles.inlineImage2}>
                  <Image
                    src={ImgB}
                    alt='Phoenix skyline'
                    fill
                    className={styles.imgii}
                  />
                </span>
                means to you.
              </h2>
            </div>
            <div className={styles.contentMiddle}>
              <BookingButton text='Book Here • Book Here • Book Here • Book Here •' />
            </div>
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
