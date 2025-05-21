import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./ServicePageIntro.module.css";
import Image from "next/image";
import Img1 from "../../../../public/images/services.jpg";
import Nav from "@/components/shared/Nav/Nav";
import BookingWidget from "@/components/homepage/BookingWidget/BookingWidget";
import BookingButton from "@/components/homepage/BookingButton/BookingButton";

export default function ServicePageIntro() {
  return (
    <section className={styles.container}>
      <div className={styles.imgContainer}>
        <div className={styles.imgOverlay}></div>
        <Image
          src={Img1}
          alt=''
          title=''
          priority
          fill
          className={styles.img}
        />
        <Nav
          logoColor='var(--tan)'
          navItemColor='var(--tan)'
          signUpBtnType='nav'
        />
        <LayoutWrapper>
          <div className={styles.content}>
            <div className={styles.contentTop}>
              <BookingButton text='Book Here • Book Here • Book Here • Book Here •' />{" "}
              <h1 className={styles.heading}>
                Chauffeur Services <br /> Tailored to Every Journey
              </h1>
              <p className={styles.copy}>
                At Nier Transportation, we&rsquo;re more than a car service;
                we&rsquo;re your trusted partner in high end transportation.
              </p>
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
