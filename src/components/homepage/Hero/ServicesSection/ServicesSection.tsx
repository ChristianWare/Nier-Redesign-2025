"use client";

import styles from "./ServicesSection.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Button from "@/components/shared/Button/Button";
// import Left from "../../../../../public/icons/left.svg";
// import Right from "../../../../../public/icons/right.svg";
import Img from "../../../../../public/images/cadi.jpg";
import Img2 from "../../../../../public/images/chauffeur.jpg";
import Img3 from "../../../../../public/images/distance.jpg";
import Img4 from "../../../../../public/images/driver.jpg";
import Img5 from "../../../../../public/images/hero.jpg";
import Img6 from "../../../../../public/images/heroii.jpg";

const data = [
  {
    id: 1,
    title: "Airport Transfers",
    copy: "Our black car services provide seamless airport transfers to Scottsdale Airport, Phoenix Sky Harbor International Airport, and Phoenix-Mesa Gateway, ensuring punctual and stress-free transportation with dedicated chauffeurs.",
    src: Img,
  },
  {
    id: 2,
    title: "Special Events",
    copy: "Transportation to special events ensures attendees arrive safely and on time, offering reliable options from luxury vehicles to shuttle buses for various group sizes and preferences.",
    src: Img2,
  },
  {
    id: 3,
    title: "Party Bus",
    copy: "Turn any occasion into an unforgettable celebration with our party bus services. Our party buses are designed to enhance the excitement and fun. With spacious interiors, entertainment systems, and a professional chauffeur at the helm, our party buses are the perfect choice for your next big event. Make your journey as memorable as the destination with our party bus services.",
    src: Img3,
  },
  {
    id: 4,
    title: "Reoccurring Rides",
    copy: "Providing transportation for recurring business travel ensures convenience and reliability. Whether for airport transfers or business meetings, scheduled rides guarantee timely arrivals without the worries of typical ride-share providers. We offer peace of mind, ensuring our guests' transportation needs are met professionally and promptly.",
    src: Img4,
  },
  {
    id: 5,
    title: "Long Distance Drives",
    copy: "Embark on comfortable and stress-free long-distance journeys with our specialized long-distance drive services. Whether you're traveling to another city or state for business or leisure, our experienced chauffeurs and well-maintained vehicles ensure a smooth and enjoyable ride. Sit back, relax, and let us handle the miles, providing you with a safe and convenient travel experience, so you can arrive at your destination refreshed and ready to go.",
    src: Img5,
  },
  {
    id: 6,
    title: "Golf Outing Tours",
    copy: "Heading to TPC, We-Ko Pa, Troon, Grayhawk, or Gold Canyon? We offer seamless transportation to the golf course, allowing you to focus on your game. Our wide range of vehicles can accommodate any group size, ensuring comfortable travel. Our experienced drivers know the local courses, ensuring efficient and timely arrivals. Whether it's a small outing or a large tournament, we enhance your golfing experience with our reliable transportation solutions.",
    src: Img6,
  },
];

export default function ServicesSection() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const restartTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(
      () => setCurrent((i) => (i + 1) % data.length),
      5000
    );
  };

  useEffect(() => {
    restartTimer(); 

    return () => {
      if (timerRef.current !== null) {
        clearInterval(timerRef.current);
      }
    };
  }, []); 

  // const goPrev = () => {
  //   setCurrent((i) => (i === 0 ? data.length - 1 : i - 1));
  //   restartTimer();
  // };
  // const goNext = () => {
  //   setCurrent((i) => (i + 1) % data.length);
  //   restartTimer();
  // };

  const slide = data[current];

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <h2 className={styles.heading}>
            Services
            <br />
            we offer at Nier
          </h2>
          <p className={styles.headingIntro}>
            Whether it&rsquo;s an airport transfer, a night out, or corporate
            travel, our black‑car service delivers luxury and class.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardLeft}>
            <div>
              <span className={styles.title}>{slide.title}</span>
              <p className={styles.copy}>{slide.copy}</p>
              <div className={styles.btnContainer}>
                <Button btnType='nav' href='/' text='more details' />
              </div>
            </div>

            <div className={styles.navigation}>
              <div className={styles.arrowBoxParent}>
                {/* <div className={styles.arrowBox} onClick={goPrev}>
                  <Left className={styles.icon} />
                </div>
                <div className={styles.arrowBox} onClick={goNext}>
                  <Right className={styles.icon} />
                </div> */}
              </div>
            </div>
          </div>

          <div className={styles.cardRight}>
            {/* IMG + progress ring — the key forces remount -> animation restarts */}
            <div className={styles.imgContainer} key={current}>
              <Image src={slide.src} alt='' fill className={styles.img} />
              <svg className={styles.progress} viewBox='0 0 100 100'>
                <circle className={styles.track} cx='50' cy='50' r='49' />
                <circle className={styles.indicator} cx='50' cy='50' r='49' />
              </svg>
            </div>

            <div className={styles.indicators}>
              {data.map((_, i) => (
                <span
                  key={i}
                  className={`${styles.indicator} ${
                    i === current ? styles.activeIndicator : ""
                  }`}
                  onClick={() => {
                    setCurrent(i);
                    restartTimer();
                  }}
                />
              ))}
            </div>
            <div className={styles.navigation2}>
              <div className={styles.arrowBoxParent}>
                {/* <div className={styles.arrowBox} onClick={goPrev}>
                  <Left className={styles.icon} />
                </div>
                <div className={styles.arrowBox} onClick={goNext}>
                  <Right className={styles.icon} />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
