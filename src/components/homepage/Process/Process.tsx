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
    title: "Airport Transfers",
    description:
      "Business travelers rely on us for seamless Sky Harbor pickups and drop-offs, complete with real-time flight monitoring and 60 minutes of complimentary wait time.",
  },
  {
    id: 2,
    icon: <Car className={styles.icon} />,
    title: "Corporate Roadshows",
    description:
      "Keep your executives on schedule with door-to-door service between meetings, including printed receipts and chilled bottled water onboard.",
  },
  {
    id: 3,
    icon: <Calendar className={styles.icon} />,
    title: "Special Events",
    description:
      "From weddings to stadium games, we eliminate the parking headache—add meet-and-greet signage or champagne service for a memorable arrival.",
  },
  {
    id: 4,
    icon: <Receipt className={styles.icon} />,
    title: "Weekend Getaways",
    description:
      "Families and groups book round-trip excursions to Sedona, Flagstaff, and beyond with flat-rate mileage pricing—no hidden fuel surcharges or surprise fees.",
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
                  <h2 className={styles.heading}>Popular Routes & Use-Cases</h2>
                  <p className={styles.copy}>
                    Business travelers rely on us for effortless Sky Harbor
                    transfers. Event planners trust us to shuttle wedding
                    parties and corporate guests across the Valley. Families
                    book round-trips to Flagstaff, Sedona, and Tucson for the
                    same flat mileage rate—no hidden fuel surcharges or gratuity
                    “surprises.”
                  </p>
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
