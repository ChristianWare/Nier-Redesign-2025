import styles from "./BookingWidget.module.css";
import FalseButton from "@/components/shared/FalseButton/FalseButton";

const data = [
  {
    id: 1,
    title: "Date",
  },
  {
    id: 2,
    title: "Pick Up",
  },
  {
    id: 3,
    title: "Drop Off",
  },
  {
    id: 4,
    title: "Pick up Time",
  },
  {
    id: 5,
    title: "Passengers",
  },
  {
    id: 6,
    title: "Service",
  },
];

export default function BookingWidget() {
  return (
    <div className={styles.parent}>
      <span className={styles.heading}>Get an instant quote:</span>
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
    </div>
  );
}
