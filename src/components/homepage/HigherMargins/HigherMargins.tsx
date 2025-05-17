"use client";

import styles from "./HigherMargins.module.css";
import Image from "next/image";
import Img from "../../../../public/images/heroii.jpg";
import Img2 from "../../../../public/images/driver.jpg";
import React from "react";

const HigherMargins = () => {
  const data = [
    {
      title: "Unique Design",
      description:
        "Each website is uniquely designed to match your brand’s personality and vision.",
    },
    {
      src: Img,
      title: "User-Centered Approach",
      description:
        "Our designs prioritize user experience, ensuring your visitors can easily navigate and find the information they need.",
    },
    {
      title: "Responsive Layouts",
      description:
        "Our websites are fully responsive, looking great on all devices, from desktops to mobile phones.",
    },
    {
      title: "Fast Loading Speeds",
      description:
        "We optimize your website to ensure fast loading times, providing a smooth user experience and reducing bounce rates.",
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
