"use client";

import styles from "./Services.module.css";
import { useState } from "react";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Image from "next/image";
import Left from "../../../../public/icons/left.svg";
import Right from "../../../../public/icons/right.svg";
import { services } from "@/data";
import Button from "@/components/shared/Button/Button";
import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";

export default function Services() {
  const slides = services.slice(0, 4);
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i === 0 ? slides.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === slides.length - 1 ? 0 : i + 1));

  return (
    <section className={styles.container}>
      <SectionHeading title='What we do' />
      <LayoutWrapper>
        <div className={styles.top}>
          <h2 className={styles.heading}>Popular Services</h2>
          <div className={styles.topBtnContainer}>
            <Button btnType='red' href='/' text='All Services' />
          </div>
          <p className={styles.copy}>
            Whether it&lsquo;s a simple airport transfer, special event, or
            girls night out, our black car service delivers the epitome of
            luxury and class. Book your next ride with us. Hare are some of the
            services we provide:
          </p>
        </div>
        <div className={styles.bottom}>
          {slides.map((x, i) => (
            <div
              key={x.id}
              className={[
                styles.card,
                i % 2 === 1 && styles.evenCard,
                i === current && styles.slideActive,
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <span className={styles.space} />
              <div className={styles.cardContent}>
                <div className={styles.cardLeft}>
                  <div className={styles.imgContainer}>
                    <Image
                      src={x.src}
                      alt={x.title}
                      fill
                      className={styles.img}
                    />
                    <div className={styles.indicators}>
                      {services.map((_, idx) => (
                        <span
                          key={idx}
                          className={`${styles.indicator} ${
                            idx === current ? styles.activeIndicator : ""
                          }`}
                          onClick={() => setCurrent(idx)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className={styles.cardRight}>
                  <div className={styles.cardRightTop}>
                    <h3 className={styles.reviewer}>{x.title}</h3>
                  </div>
                  <div>
                    <p className={styles.review}>{x.copy}</p>
                    <div className={styles.btnContainer}>
                      <Button text='Learn More' btnType='black' href='/' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.navigation}>
          <div className={styles.arrowBoxParent}>
            <div className={styles.arrowBox} onClick={prev}>
              <Left className={styles.icon} />
            </div>
            <div className={styles.arrowBox} onClick={next}>
              <Right className={styles.icon} />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
