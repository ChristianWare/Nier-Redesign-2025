"use client";

import { useState } from "react";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Reviews.module.css";
import { reviews } from "@/data";
import Image from "next/image";
import Left from "../../../../public/icons/left.svg";
import Right from "../../../../public/icons/right.svg";

export default function Reviews() {
  const slides = reviews.slice(0, 3);
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i === 0 ? slides.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === slides.length - 1 ? 0 : i + 1));

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <h2 className={styles.heading}>Reviews</h2>
          <p className={styles.copy}>
            Read what our clients have to say about their journey with us
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
                      src={x.person}
                      alt={x.reviewer}
                      fill
                      className={styles.img}
                    />
                    <div className={styles.indicators}>
                      {slides.map((_, idx) => (
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
                    <h3 className={styles.reviewer}>{x.reviewer}</h3>
                    <p className={styles.company}>{x.company}</p>
                    <span className={styles.starContainer}>
                      <span className={styles.star}></span>
                      <span className={styles.star}></span>
                      <span className={styles.star}></span>
                      <span className={styles.star}></span>
                      <span className={styles.star}></span>
                    </span>{" "}
                  </div>
                  <p className={styles.review}>{x.review}</p>
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
