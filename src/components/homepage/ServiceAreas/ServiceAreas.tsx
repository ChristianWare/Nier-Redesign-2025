"use client";

import { useEffect, useRef, useState } from "react";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./ServiceAreas.module.css";
import Image from "next/image";

/* ------------- images per city ------------- */
import ImgScottsdale from "../../../../public/images/partybus.jpg";
import ImgPhoenix from "../../../../public/images/hero.jpg";
import ImgMesa from "../../../../public/images/driver.jpg";
import ImgTempe from "../../../../public/images/distance.jpg";
import ImgWestValley from "../../../../public/images/chauffeur.jpg";
import ImgCasaGrande from "../../../../public/images/cadi.jpg";
import ImgMaricopa from "../../../../public/images/areas.jpg";

const data = [
  {
    id: 7,
    city: "Scottsdale",
    desc: "Scottsdale is known for its vibrant arts scene, upscale shopping, and stunning desert landscapes.",
    src: ImgScottsdale,
  },
  {
    id: 8,
    city: "Phoenix",
    desc: "The state's capital and largest city, offering a diverse cultural scene, desert botanical gardens, and outdoor adventures.",
    src: ImgPhoenix,
  },
  {
    id: 9,
    city: "Mesa",
    desc: "Mesa boasts a rich history, with the Mesa Arts Center and a thriving downtown area, making it a hub for arts and culture.",
    src: ImgMesa,
  },
  {
    id: 10,
    city: "Tempe",
    desc: "Home to Arizona State University, combines a lively college atmosphere with recreation along Tempe Town Lake.",
    src: ImgTempe,
  },
  {
    id: 13,
    city: "West Valley",
    desc: "Avondale, Goodyear, Buckeye, Surprise, Glendale, Tolleson, and Peoria—suburban living with easy recreation.",
    src: ImgWestValley,
  },
  {
    id: 14,
    city: "Casa Grande",
    desc: "Casa Grande, home of Lucid Motors, features the Casa Grande Ruins National Monument and a welcoming community.",
    src: ImgCasaGrande,
  },
  {
    id: 15,
    city: "Maricopa",
    desc: "Maricopa is a fast‑growing, family‑friendly city set against the natural beauty of the Sonoran Desert.",
    src: ImgMaricopa,
  },
];

export default function ServiceAreas() {
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const pickActiveCard = () => {
      if (!stickyRef.current || !containerRef.current) return;

      const viewportH = window.innerHeight;

      /* ---------- MOBILE ≤ 568 px ---------- */
      if (window.innerWidth <= 568) {
        const thresholdLine = viewportH * 0.7; // 70 % down
        let newIdx = active; // fallback

        cardRefs.current.forEach((card, index) => {
          if (!card) return;
          const rect = card.getBoundingClientRect();
          // card crosses the 80 % line
          if (rect.top <= thresholdLine && rect.bottom > thresholdLine) {
            newIdx = index;
          }
        });

        if (newIdx !== active) setActive(newIdx);
        return; // done for mobile
      }

      /* ---------- DESKTOP  > 568 px ---------- */

      const imgRect = stickyRef.current.getBoundingClientRect();
      const imgCenter = imgRect.top + imgRect.height / 2;

      const containerRect = containerRef.current.getBoundingClientRect();
      const containerTop = containerRect.top;
      const containerBottom = containerRect.bottom;

      /* sentinel guards so first & last can activate */
      if (imgCenter <= containerTop + 200) {
        if (active !== 0) setActive(0);
        return;
      }
      if (imgCenter >= containerBottom - 200) {
        const last = data.length - 1;
        if (active !== last) setActive(last);
        return;
      }

      /* closest‑centre logic */
      let bestIdx = active;
      let minDiff = Infinity;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const diff = Math.abs(cardCenter - imgCenter);

        if (diff < minDiff) {
          minDiff = diff;
          bestIdx = index;
        }
      });

      if (bestIdx !== active) setActive(bestIdx);
    };

    /* throttle via rAF */
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          pickActiveCard();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    /* initial run after DOM ready */
    const timer = setTimeout(() => {
      pickActiveCard();
      setIsReady(true);
    }, 100);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [active]);

  return (
    <section className={styles.container} ref={containerRef}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={styles.heading}>
              Serving the Phoenix
              <br />
              metropolitan area
            </h2>
            <p className={styles.copy}>
              Need to go somewhere outside our service area? We&lsquo;ll get you
              there, too.
            </p>
          </div>

          <div className={styles.bottom}>
            <div className={styles.left}>
              <div className={styles.imgContainer} ref={stickyRef}>
                {isReady && (
                  <Image
                    src={data[active].src}
                    alt={data[active].city}
                    fill
                    priority
                    className={styles.img}
                  />
                )}
              </div>
            </div>
            <div className={styles.right}>
              {data.map((city, i) => (
                <div
                  key={city.id}
                  ref={(el) => {
                    cardRefs.current[i] = el;
                  }}
                  className={`${styles.card} ${
                    i === active ? styles.activeCard : ""
                  }`}
                >
                  <h3 className={styles.city}>{city.city}</h3>
                  <p className={styles.desc}>{city.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
