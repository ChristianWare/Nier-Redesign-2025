import BookingButton from "@/components/homepage/BookingButton/BookingButton";
import styles from "./FinalCTA.module.css";
import SectionHeading from "../SectionHeading/SectionHeading";

export default function FinalCTA() {
  return (
    <section className={styles.container}>
      <SectionHeading title='book now' />
      <div className={styles.content}>
        <BookingButton text='Book Here • Book Here • Book Here • Book Here •' />{" "}
        <h2 className={styles.heading}>
          Have a question or just want to say hello? We&lsquo;re here for you!
        </h2>
      </div>
    </section>
  );
}
