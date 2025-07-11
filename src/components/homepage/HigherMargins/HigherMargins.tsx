"use client";

import styles from "./HigherMargins.module.css";
import Image from "next/image";
import Img from "../../../../public/images/heroii.jpg";
import Img2 from "../../../../public/images/driver.jpg";
import React from "react";

const HigherMargins = () => {
  const data = [
    {
      title: "Proven Punctuality",
      description:
        "We maintain a 100% on-time arrival rate—audited quarterly by an independent firm to ensure you’re never left waiting.",
    },
    {
      src: Img,
      title: "Flat-Rate Pricing",
      description:
        "Enjoy fully transparent, all-inclusive flat-rate pricing with no surge fees, hidden charges, or surprise add-ons.",
    },
    {
      title: "Rapid Response Support",
      description:
        "Our dedicated customer-care team answers every inquiry within seven minutes, 24/7—so you always have real-time assistance.",
    },
    {
      title: "Certified Chauffeurs",
      description:
        "All of our chauffeurs undergo thorough background checks and hold commercial licenses with annual defensive-driving recertifications.",
    },
    {
      src: Img2,
    },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.bottom}>
        {data.map((x, index) => (
          <React.Fragment key={index}>
            {x.src && (
              <div className={styles.imgContainer}>
                <Image src={x.src} alt='image' fill className={styles.img} />
              </div>
            )}
            {x.title && x.description && (
              <div key={index} className={styles.card}>
                <h3 className={styles.title}>{x.title}</h3>
                <p className={styles.desc}>{x.description}</p>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
export default HigherMargins;
