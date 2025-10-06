// app/components/Announcement.tsx
"use client";

import { useEffect, useState } from "react";
import Modal from "@/components/shared/Modal/Modal";
import Button from "@/components/shared/Button/Button";
import styles from "./Announcement.module.css";
import Image from "next/image";
import Img1 from "../../../../public/images/footballii.png";

export default function Announcement() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);
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
          🏈 Thursday Night Lights – <br /> December 21st, 2025!
        </h2>
        <p className={styles.copy}>
          It’s Cardinals vs Seahawks at State Farm Stadium, and Nier
          Transportation has your whole night covered. Grab our Game Day Package
          for 10 people — includes Club Level seats, Club Level food, and
          roundtrip transportation. No parking, no stress — just fun, food, and
          football with your crew.
        </p>
        <p className={styles.copy}>
          #SundayNightFootball #AZCardinals #GameDayVibes #GroupPackage
          #ClubLevelExperience #NierTransportation #RideTogether #NFL2025
        </p>

        <div className={styles.btnContainer}>
          <Button
            href='https://bookridesonline.com/book/?dbaid=L4JAaOi0gExXw5xek9dmgQ%3d%3d'
            target='_blank'
            text='Reserve My Ride Now'
            btnType='red'
          />{" "}
          <Button
            href="tel:+14803006003"
            onClick={handleClose}
            text='Call for special pricing'
            btnType='redOutline'
          />
        </div>
      </div>
    </Modal>
  );
}
