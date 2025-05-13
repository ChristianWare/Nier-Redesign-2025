import styles from "./BookingWidget.module.css";
import FalseButton from "@/components/shared/FalseButton/FalseButton";

const data = [
  {
    id: 1,
    title: "Location",
  },
  {
    id: 2,
    title: "Check In",
  },
  {
    id: 3,
    title: "Check Out",
  },
  {
    id: 4,
    title: "Check Out",
  },
  {
    id: 5,
    title: "Guests",
  },
];

export default function BookingWidget() {
  return (
    <div className={styles.container}>
      {data.map((x) => (
        <span className={styles.title} key={x.id}>
          {x.title}
        </span>
      ))}
      <div className={styles.btnContainer}>
        <FalseButton text='Search' btnType='red' />
      </div>
    </div>
  );
}
