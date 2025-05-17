import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Process.module.css";
import BookingButton from "../BookingButton/BookingButton";
import Bell from "../../../../public/icons/bell.svg";
import Car from "../../../../public/icons/car.svg";
import Receipt from "../../../../public/icons/receipt.svg";
import Calendar from "../../../../public/icons/calendar.svg";
import Image from "next/image";
import Img1 from "../../../../public/images/cadi2.jpg";
import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";

const data = [
  {
    id: 1,
    icon: <Bell className={styles.icon} />,
    title: "Select Service",
    description:
      "Choose the ride type that fits your journey—whether it’s an airport transfer, hourly chauffeur, or special event booking.",
  },
  {
    id: 2,
    icon: <Car className={styles.icon} />,
    title: "Choose Vehicle",
    description:
      "Pick from our premium fleet: sleek sedans, spacious SUVs, executive sprinters or party buses to match your style and group size.",
  },
  {
    id: 3,
    icon: <Calendar className={styles.icon} />,
    title: "Pick Date/Time",
    description:
      "Schedule your exact pickup date and time with live availability—no guesswork, no delays, just seamless planning.",
  },
  {
    id: 4,
    icon: <Receipt className={styles.icon} />,
    title: "Reserve Your Ride",
    description:
      "Confirm your booking with a secure payment, and you’ll instantly receive your chauffeur’s details and live‑tracking link.",
  },
];

export default function Process() {
  return (
    <section className={styles.container}>
      <SectionHeading title='How it works' />
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.bottom}>
              <div className={styles.left}>
                <div className={styles.leftContent}>
                  <h2 className={styles.heading}>
                    4 Easy steps To book your next ride
                  </h2>
                  <div className={styles.imgContanier}>
                    <Image
                      src={Img1}
                      alt=''
                      title=''
                      fill
                      className={styles.img}
                    />
                    <div className={styles.btnContainer}>
                      <BookingButton text='Book Here • Book Here • Book Here • Book Here •' />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.dataContainer}>
                {data.map((x) => (
                  <div key={x.id} className={styles.card}>
                    {x.icon}
                    <h3 className={styles.title}>
                      {x.id}. {x.title}
                    </h3>
                    <p className={styles.description}>{x.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
