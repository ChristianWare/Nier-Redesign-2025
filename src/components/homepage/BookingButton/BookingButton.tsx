"use client";

import styles from "./BookingButton.module.css";
// import Arrow from "../../../../public/icons/arrow.svg";
// import Logo from "../../../../public/icons/logoIcon.svg";
import Link from "next/link";

interface RotatingTextProps {
  text: string;
  color?: string;
}

export default function BookingButton({ text, color = "" }: RotatingTextProps) {
  return (
    <Link
        href='https://bookridesonline.com/book/?dbaid=L4JAaOi0gExXw5xek9dmgQ%3d%3d'
        target='_blank'
      >
    <div className={styles.container}>
        <svg
          className={`${styles.svg} ${styles.autoSpin}`}
          viewBox='0 0 100 100'
        >
          <defs>
            <path
              id='circle'
              d='
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0'
            />
          </defs>
          <text fontSize='8.4'>
            <textPath
              className={`${styles.svg} ${styles[color]}`}
              xlinkHref='#circle'
            >
              {text}
            </textPath>
          </text>
        </svg>
        {/* <Logo className={styles.arrow} /> */}
    </div>
      </Link>
  );
}
