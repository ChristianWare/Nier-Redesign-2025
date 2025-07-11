// app/components/Announcement.tsx
"use client";

import { useEffect, useState } from "react";
import Modal from "@/components/shared/Modal/Modal";
import Button from "@/components/shared/Button/Button";
import styles from "./Announcement.module.css";
import Image from "next/image";
import Img1 from "../../../../public/images/mw.png";
import FalseButton from "@/components/shared/FalseButton/FalseButton";

export default function Announcement() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <div className={styles.modalContent}>
        <div className={styles.imgContainer}>
          <Image src={Img1} fill alt='' title='' className={styles.img} />
        </div>
        <h2 className={styles.heading}>
          Morgan Wallen concert: <br /> July 18 - 19
        </h2>
        <p>
          Join us for an unforgettable experience at the Morgan Wallen Concert
          at State Farm Stadium on July 18 and 19! We're offering convenient
          group transportation to ensure you and your friends can enjoy the show
          without the hassle of parking or navigation. Our comfortable, reliable
          service will pick you up and drop you off right at the venue, so you
          can focus on the music and have a great time. Don’t miss out on this
          opportunity to make the concert experience even more enjoyable—reserve
          your rides today!
        </p>

        <div className={styles.btnContainer}>
          <Button
            href='https://bookridesonline.com/book/?dbaid=L4JAaOi0gExXw5xek9dmgQ%3d%3d'
            target='_blank'
            text='Reserve My Ride Now'
            btnType='red'
          />{" "}
          <FalseButton
            onClick={handleClose}
            text='Close'
            btnType='redOutline'
          />
        </div>
      </div>
    </Modal>
  );
}
