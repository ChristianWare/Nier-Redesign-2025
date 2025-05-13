import styles from "./Hero.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Image from "next/image";
import Img1 from "../../../../public/images/heroii.jpg";
import Nav from "@/components/shared/Nav/Nav";
import BookingWidget from "../BookingWidget/BookingWidget";

export default function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.imgOverlay}></div>
      <div className={styles.imgContainer}>
        <Image
          src={Img1}
          alt=''
          title=''
          priority
          fill
          className={styles.img}
        />
        <div className={styles.navContainer}>
          <Nav />
        </div>
        <LayoutWrapper>
          <div className={styles.content}>
            <div className={styles.contentTop}>
              <div className={styles.left}>z
                <h1 className={styles.heading}>Start your journey with <br /> Us, Nier.</h1>
              </div>
              <div className={styles.right}>
                <p className={styles.copy}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam, maiores asperiores! Eaque asperiores illo esse quidem
                  sint. Eum, quam nisi?
                </p>
              </div>
            </div>
            <div className={styles.BookingWidgitContainer}>
              <BookingWidget />
            </div>
          </div>
        </LayoutWrapper>
      </div>
    </section>
  );
}
