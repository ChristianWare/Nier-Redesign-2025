import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./SafetyAndCompliance.module.css";
import Image from "next/image";
import Img1 from "../../../../public/images/casaGrande.jpg";
import Img2 from "../../../../public/images/distance.jpg";
import Img3 from "../../../../public/images/events.jpg";
import Img4 from "../../../../public/images/westValleyii.jpg";

const data = [
  {
    id: 1,
    title: "ADOT TCP Licensed",
    src: Img1,
    desc: "Arizona Department of Transportation TCP #PHX-001234",
  },
  {
    id: 2,
    title: "TSA Security Certified",
    src: Img2,
    desc: "TSA Airport Security Program participant (commercial & FBO)",
  },
  {
    id: 3,
    title: "Real-Time Telematics",
    src: Img3,
    desc: "GPS monitoring with speed and braking alerts sent instantly to dispatch",
  },
  {
    id: 4,
    title: "ADA & Child Safety Ready",
    src: Img4,
    desc: "ADA-compliant ramps and child-safety seats available upon request",
  },
] as const;

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
          <div className={styles.bottom}>
            {data.map((x) => (
              <div className={styles.card} key={x.id}>
                <div className={styles.cardTop}>
                  <div className={styles.imgContainer}>
                    <Image
                      src={x.src}
                      fill
                      alt=''
                      title=''
                      className={styles.img}
                    />
                  </div>
                  <h3 className={styles.title}>{x.title}</h3>
                </div>
                <p className={styles.desc}>{x.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
