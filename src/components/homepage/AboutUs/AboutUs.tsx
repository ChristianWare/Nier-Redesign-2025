"use client";

import styles from "./AboutUs.module.css";
import { useRef } from "react";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Image from "next/image";
import Img1 from "../../../../public/images/hero.jpg";
import Img2 from "../../../../public/images/partybus.jpg";
import Img3 from "../../../../public/images/specialevents.jpg";
import Img4 from "../../../../public/images/reocurring.jpg";
import Img5 from "../../../../public/images/distance.jpg";
import Img6 from "../../../../public/images/chauffeur.jpg";
import Arrow from "../../../../public/icons/arrow.svg";

const data = [
  { id: 1, title: "Punctual—Guaranteed" },
  { id: 2, title: "Professional Chauffeurs" },
  { id: 3, title: "Luxury Fleet" },
];

const imageData = [
  { id: 1, src: Img1, service: "Airport Transfrers", href: "/" },
  { id: 2, src: Img3, service: "Special Events", href: "/" },
  { id: 3, src: Img2, service: "Party Bus", href: "/" },
  { id: 4, src: Img4, service: "Reoccuring Rides", href: "/" },
  { id: 5, src: Img5, service: "Long Distance Drives", href: "/" },
  { id: 6, src: Img6, service: "Hourly Chauffeur", href: "/" },
];

const loopedImages = [...imageData, ...imageData];

export default function AboutUs() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={styles.heading}>Why Ride with Nier</h2>
            <div className={styles.topContainer}>
              <p className={styles.copy}>
                With a passion for providing the best car service in the Phoenix
                Metro area, we&lsquo;ve been serving the Arizona community for
                20 years.
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
            <div className={styles.scrollTrack} ref={trackRef}>
              {loopedImages.map((y, i) => (
                <div className={styles.imgContainer} key={`${y.id}-${i}`}>
                  <Arrow className={styles.icon} />
                  <Image
                    src={y.src}
                    width={300}
                    height={300}
                    alt=''
                    className={styles.img}
                  />
                  <h3 className={styles.service}>{y.service}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
