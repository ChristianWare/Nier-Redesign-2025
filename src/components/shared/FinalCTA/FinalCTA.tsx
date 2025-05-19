import BookingButton from "@/components/homepage/BookingButton/BookingButton";
import styles from "./FinalCTA.module.css";
import SectionHeading from "../SectionHeading/SectionHeading";
import Button from "../Button/Button";

export default function FinalCTA() {
  return (
    <section className={styles.container}>
      <SectionHeading title='book now' />
      <div className={styles.content}>
        <BookingButton text='Book Here • Book Here • Book Here • Book Here •' />{" "}
        <h2 className={styles.heading}>Ready for Next-Level <br /> Ground Travel?</h2>
        <p className={styles.copy}>
          Experience Phoenix, Scottsdale, and all of Arizona the Nier way—safe,
          punctual, and unmistakably elegant.
        </p>
        <div className={styles.btnContainer}>
          <Button href='/' text='Book Now' btnType="red" />
          <Button href='/' text='Contact Us' btnType="redOutline" />
        </div>
      </div>
    </section>
  );
}
