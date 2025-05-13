import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./AboutUs.module.css";

const data = [
  {
    id: 1,
    title: "Professional Drivers",
  },
  {
    id: 2,
    title: "Diverse Services",
  },
  {
    id: 3,
    title: "Timeless Elegance",
  },
  {
    id: 4,
    title: "Stylish Vehicles",
  },
];

export default function AboutUs() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={styles.heading}>About Us</h2>
            <div className={styles.topContainer}>
              <p className={styles.copy}>
                At Nier Transportation, we&rsquo;re more than a car service;
                we&rsquo;re your trusted partner in high end transportation.
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
          <div className={styles.bottom}></div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
