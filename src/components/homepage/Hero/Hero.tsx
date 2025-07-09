import styles from "./Hero.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Image from "next/image";
import Img1 from "../../../../public/images/road.jpg";
import Nav from "@/components/shared/Nav/Nav";
// import BookingWidget from "../BookingWidget/BookingWidget";
import BookingButton from "../BookingButton/BookingButton";
import Button from "@/components/shared/Button/Button";

export default function Hero() {
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
        <Nav navItemColor='var(--tan)' signUpBtnType='nav' />
        <LayoutWrapper>
          <div className={styles.content}>
            <div className={styles.left}>
              <h1 className={styles.heading}>
                {/* Book your <br /> next ride with
                <br /> Nier Transportation */}
                Reliable, On-Time <br /> Black-Car Service <br /> Across Phoenix
                & Beyond.
              </h1>
              <p className={styles.copy}>
                At Nier Transportation, we&rsquo;re more than a car service;
                we&rsquo;re your trusted partner in high end transportation.
              </p>
              <div className={styles.btnContainer}>
                <Button href='/' text='Reserve My Ride Now' btnType='white' />
                <Button href='/services' text='See our Services' btnType='whiteOutline' />
              </div>
            </div>
            <div className={styles.right}>
              <BookingButton text='Book Here • Book Here • Book Here • Book Here •' />
              {/* <div className={styles.BookingWidgitContainer}>
                <BookingWidget />
              </div> */}
            </div>
          </div>
        </LayoutWrapper>
      </div>
    </section>
  );
}
