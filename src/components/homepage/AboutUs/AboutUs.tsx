import HigherMargins from "../HigherMargins/HigherMargins";
import styles from "./AboutUs.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";

const data = [
  { id: 1, title: "Professional Chauffeurs" },
  { id: 2, title: "Flat-Rate Pricing" },
  { id: 3, title: "Flight-Tracking Pickup" },
];

export default function AboutUs() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={styles.heading}>
              Why Ride with <br /> Nier Transportation?
            </h2>
            <div className={styles.topContainer}>
              <p className={styles.copy}>
                When you ride with Nier you’re protected by a 100% on-time
                record, flat-rate pricing with zero surge fees, and a
                customer-care team that answers within seven minutes, day or
                night. We hire only background-checked chauffeurs with
                commercial licenses and defensive-driving certifications,
                because punctuality means nothing without safety.
              </p>
              <div className={styles.widgitContainer}>
                {data.map((x) => (
                  <div key={x.id} className={styles.card}>
                    <span className={styles.title}>{x.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <HigherMargins />
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
