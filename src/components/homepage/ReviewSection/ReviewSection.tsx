"use client";

import styles from "./ReviewSection.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import { useState, useEffect, useRef } from "react";
import { reviews } from "@/data";
import Image from "next/image";
// import Button from "@/components/shared/Button/Button";
import Left from "../../../../public/icons/left.svg";
import Right from "../../../../public/icons/right.svg";
import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";

export default function ReviewSection() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const restartTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(
      () => setCurrent((i) => (i + 1) % reviews.length),
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

  const goPrev = () => {
    setCurrent((i) => (i === 0 ? reviews.length - 1 : i - 1));
    restartTimer();
  };
  const goNext = () => {
    setCurrent((i) => (i + 1) % reviews.length);
    restartTimer();
  };

  const slide = reviews[current];

  return (
    <section className={styles.container}>
      <SectionHeading title='Reviews' />

      <LayoutWrapper>
        <div className={styles.top}>
          <h2 className={styles.heading}>
            reviews
            <br />
            from past clients
          </h2>
          <p className={styles.headingIntro}>
            Whether it&rsquo;s an airport transfer, a night out, or corporate
            travel, our black‑car service delivers luxury and class.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardLeft}>
            <div>
              <span className={styles.title}>{slide.reviewer}</span>
              <span className={styles.location}>{slide.company}</span>
              <span className={styles.starContainer}>
                <span className={styles.star}></span>
                <span className={styles.star}></span>
                <span className={styles.star}></span>
                <span className={styles.star}></span>
                <span className={styles.star}></span>
              </span>{" "}
              <p className={styles.copy}>{slide.review}</p>
              {/* <div className={styles.btnContainer}>
                <Button btnType='nav' href='/' text='more details' />
              </div> */}
            </div>

            <div className={styles.navigation}>
              <div className={styles.arrowBoxParent}>
                <div className={styles.arrowBox} onClick={goPrev}>
                  <Left className={styles.icon} />
                </div>
                <div className={styles.arrowBox} onClick={goNext}>
                  <Right className={styles.icon} />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.cardRight}>
            <div className={styles.imgContainer} key={current}>
              <Image src={slide.person} alt='' fill className={styles.img} />
              <svg className={styles.progress} viewBox='0 0 100 100'>
                <circle className={styles.track} cx='50' cy='50' r='49' />
                <circle className={styles.indicator} cx='50' cy='50' r='49' />
              </svg>
            </div>

            <div className={styles.indicators}>
              {reviews.map((_, i) => (
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
                <div className={styles.arrowBox} onClick={goPrev}>
                  <Left className={styles.icon} />
                </div>
                <div className={styles.arrowBox} onClick={goNext}>
                  <Right className={styles.icon} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
