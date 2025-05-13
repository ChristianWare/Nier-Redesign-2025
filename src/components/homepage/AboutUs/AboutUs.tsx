"use client";

import { useRef } from "react";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./AboutUs.module.css";
import Image from "next/image";
import Img1 from "../../../../public/images/hero.jpg";
import Arrow from "../../../../public/icons/arrow.svg";

const data = [
  { id: 1, title: "Professional Drivers" },
  { id: 2, title: "Diverse Services" },
  { id: 3, title: "Timeless Elegance" },
  { id: 4, title: "Stylish Vehicles" },
];

const imageData = [
  { id: 1, src: Img1, service: "Airport Transfrers", href: "/" },
  { id: 2, src: Img1, service: "Special Events", href: "/" },
  { id: 3, src: Img1, service: "Party Bus", href: "/" },
  { id: 4, src: Img1, service: "Reoccuring Rides", href: "/" },
  { id: 5, src: Img1, service: "Long Distance Drives", href: "/" },
  { id: 6, src: Img1, service: "Hourly Charters", href: "/" },
];

const loopedImages = [...imageData, ...imageData];

export default function AboutUs() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={styles.heading}>About Us</h2>
            <div className={styles.topContainer}>
              <p className={styles.copy}>
                With a passion for providing the best car service in the Phoenix
                Metro area, we&lsquo;ve been serving the Arizona community for 20
                years.
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
