import styles from "./BookingWidget.module.css";
import FalseButton from "@/components/shared/FalseButton/FalseButton";
// import Date from "../../../../public/icons/calendar.svg";
// import Pickup from "../../../../public/icons/maPlus.svg";
// import DropOff from "../../../../public/icons/mapMinus.svg";
// import Clock from "../../../../public/icons/clock.svg";
// import Person from "../../../../public/icons/user.svg";

// const data = [
//   {
//     id: 1,
//     title: "Date",
//     icon: <Date className={styles.icon} />,
//   },
//   {
//     id: 2,
//     title: "Pick Up",
//     icon: <Pickup className={styles.icon} />,
//   },
//   {
//     id: 3,
//     title: "Drop Off",
//     icon: <DropOff className={styles.icon} />,
//   },
//   {
//     id: 4,
//     title: "Pick up Time",
//     icon: <Clock className={styles.icon} />,
//   },
//   {
//     id: 5,
//     title: "Passengers",
//     icon: <Person className={styles.icon} />,
//   },
// ];

const topData = [
  {
    id: 1,
    title: "Distance",
  },
  {
    id: 2,
    title: "Flat Rate",
  },
  {
    id: 3,
    title: "Hourly",
  },
];

export default function BookingWidget() {
  return (
    <div className={styles.container}>
      <ul className={styles.topNav}>
        {topData.map((x) => (
          <li className={styles.listItem} key={x.id}>
            {x.title}
          </li>
        ))}
      </ul>
      {/* {data.map((x) => (
        <span className={styles.title} key={x.id}>
          {x.icon} {x.title}
        </span>
      ))} */}
      <div className={styles.btnContainer}>
        <FalseButton text='Search' btnType='red' />
      </div>
    </div>
  );
}
