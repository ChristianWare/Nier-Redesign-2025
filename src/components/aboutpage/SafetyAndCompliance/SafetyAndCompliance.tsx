import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./SafetyAndCompliance.module.css";
// import Image from "next/image";
// import Img1 from "../../../../public/images/casaGrande.jpg";
// import Img2 from "../../../../public/images/distance.jpg";
// import Img3 from "../../../../public/images/events.jpg";
// import Img4 from "../../../../public/images/westValleyii.jpg";
// import Adot from '../../../../public/icons/adot.svg'
// import Tsa from '../../../../public/icons/tsa.svg'
// import Analytics from "../../../../public/icons/analytics.svg";
// import Safety from "../../../../public/icons/safety.svg";

// const data = [
//   {
//     id: 1,
//     title: "ADOT TCP Licensed",
//     src: <Adot className={styles.icon} />,
//     desc: "Arizona Department of Transportation TCP #PHX-001234",
//   },
//   {
//     id: 2,
//     title: "TSA Security Certified",
//     src: <Tsa className={styles.icon} />,
//     desc: "TSA Airport Security Program participant (commercial & FBO)",
//   },
//   {
//     id: 3,
//     title: "Real-Time Telematics",
//     src: <Analytics className={styles.icon} />,
//     desc: "GPS monitoring with speed and braking alerts sent instantly to dispatch",
//   },
//   {
//     id: 4,
//     title: "ADA & Child Safety Ready",
//     src: <Safety className={styles.icon} />,
//     desc: "ADA-compliant ramps and child-safety seats available upon request",
//   },
// ] as const;

export default function SafetyAndCompliance() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={styles.heading}>Safety & Compliance</h2>
            <p className={styles.copy}>
              Licensed under ADOT TCP #PHX-001234 and TSA-approved, our fleet is
              GPS-monitored in real time and maintained above DOT standards.
              Every ride offers ADA ramps and child-safety seats on request—so
              safety and compliance travel with you, automatically.
            </p>
          </div>
          {/* <div className={styles.bottom}>
            {data.map((x) => (
              <div className={styles.card} key={x.id}>
                <div className={styles.cardTop}>
                  {x.src}
                  <h3 className={styles.title}>{x.title}</h3>
                </div>
                <p className={styles.desc}>{x.desc}</p>
              </div>
            ))}
          </div> */}
        </div>
      </LayoutWrapper>
    </section>
  );
}
