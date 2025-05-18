import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Fleet.module.css";
import Image from "next/image";
import Suburban from "../../../../public/images/taho.png";
import Escalade from "../../../../public/images/escalade.avif";
import Sprinter from "../../../../public/images/sprinter.png";
import MercedesSedan from "../../../../public/images/mercedesSedan.avif";
import PartyBus from "../../../../public/images/partyBusii.png";
import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";
import Button from "@/components/shared/Button/Button";

const data = [
  {
    id: 1,
    title: "Chevy Suburban",
    seats: "7 seater",
    cargo: "144.7 cu ft",
    desc: "Our flagship full-size SUV pairs tri-zone climate control with class-leading leg- and luggage-room—perfect for families or small groups.",
    src: Suburban,
  },
  {
    id: 2,
    title: "Cadillac Escalade ESV",
    seats: "6 seater",
    cargo: "121 cu ft",
    desc: "The pinnacle of luxury SUVs—premium leather, rear captain’s chairs, and magnetic ride control for a first-class travel experience.",
    src: Escalade,
  },
  {
    id: 3,
    title: "Mercedes-Benz Sprinter (Executive)",
    seats: "14 seater",
    cargo: "Up to 532 cu ft",
    desc: "Lounge-style cabin with stand-up headroom, USB-C charging at every seat, and onboard Wi-Fi—ideal for corporate teams and golf outings.",
    src: Sprinter,
  },
  {
    id: 4,
    title: "Mercedes-Benz E-Class Sedan",
    seats: "3 seater",
    cargo: "19 cu ft",
    desc: "A refined executive sedan for solo travelers or couples who value discreet style, quiet comfort, and advanced safety tech.",
    src: MercedesSedan,
  },
  {
    id: 5,
    title: "Mini Party Bus",
    seats: "20 seater",
    cargo: "Ample cabin storage",
    desc: "Color-changing LED lights, Bluetooth sound, and wrap-around seating keep the celebration rolling from door to door.",
    src: PartyBus,
  },
];

export default function Fleet() {
  return (
    <section className={styles.container}>
      <SectionHeading title='Fleet' />
      <LayoutWrapper>
        <div className={styles.top}>
          <h2 className={styles.heading}>
            find the Perfect <br /> Vehicle for your trip
          </h2>
          <p className={styles.copy}>
            Our fleet combines modern design with classic beauty. You&lsquo;ll
            find sedans, SUVs, and limousines that stand out. The plush leather
            seats and smooth ride make every trip unforgettable.
          </p>
        </div>
        <div className={styles.content}>
          {data.map((x) => (
            <div className={styles.card} key={x.id}>
              <div className={styles.left}>
                <div className={styles.imgContainer}>
                  <Image
                    src={x.src}
                    fill
                    alt=''
                    title=''
                    className={styles.img}
                  />
                </div>
              </div>
              <div className={styles.right}>
                <h3 className={styles.title}>{x.title}</h3>
                <div>
                  <span className={styles.feature}>Seats:</span>
                  <p className={styles.detail}>{x.seats}</p>
                </div>
                <div>
                  <span className={styles.feature}>Cargo:</span>
                  <p className={styles.detail}>{x.cargo}</p>
                </div>
                <div>
                  <span className={styles.feature}>Details:</span>
                  <p className={styles.detail}>{x.desc}</p>
                </div>
                <div className={styles.btnContainer}>
                  <Button href='/' btnType='red' text='Book Now' />
                </div>
              </div>
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
}
