import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./ServicePageIntro.module.css";
import Image from "next/image";
import Img1 from "../../../../public/images/services.jpg";
import Nav from "@/components/shared/Nav/Nav";

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
          fill
          className={styles.img}
          priority
          placeholder='blur'
          loading='eager'
        />
        <Nav navItemColor='var(--tan)' signUpBtnType='nav' />
        <LayoutWrapper>
          <div className={styles.content}>
            <div className={styles.contentTop}>
              <BookingButton text='Book Here • Book Here • Book Here • Book Here •' />{" "}
              <h1 className={styles.heading}>
                Chauffeur Services <br /> Tailored to Every Journey
              </h1>
              <p className={styles.copy}>
                Whether you’re catching a red-eye, hosting corporate VIPs, or
                whisking a bridal party between venues, Nier Transportation
                moves people smoothly and discretely across Arizona and the
                Southwest.
              </p>
            </div>
          </div>
        </LayoutWrapper>
      </div>
    </section>
  );
}
