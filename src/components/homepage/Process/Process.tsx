import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Process.module.css";
import BookingButton from "../BookingButton/BookingButton";
import Bell from "../../../../public/icons/bell.svg";
import Car from "../../../../public/icons/car.svg";
import Receipt from "../../../../public/icons/receipt.svg";
import Calendar from "../../../../public/icons/calendar.svg";

const data = [
  {
    id: 1,
    icon: <Bell className={styles.icon} />,
    title: "Select Service",
  },
  {
    id: 2,
    icon: <Car className={styles.icon} />,
    title: "Choose Vehicle",
  },
  {
    id: 3,
    icon: <Calendar className={styles.icon} />,
    title: "Pick date/time",
  },
  {
    id: 4,
    icon: <Receipt className={styles.icon} />,
    title: "Reserve Your Ride",
  },
];

export default function Process() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={styles.heading}>
              4 Easy steps <br /> To book your next ride
            </h2>
            <div className={styles.dataContainer}>
              {data.map((x) => (
                <div key={x.id} className={styles.card}>
                  {x.icon}
                  <div className={styles.title}>
                    {x.id}. {x.title}
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.btnContainer}>
              <BookingButton text='Book Here • Book Here • Book Here • Book Here •' />
            </div>{" "}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
