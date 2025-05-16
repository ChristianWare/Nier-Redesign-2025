// AdditionalInfo.tsx
import Image from "next/image";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./AdditionalInfo.module.css";
import Img1 from "../../../../public/images/hero.jpg";

const data = [
  {
    id: 1,
    title: "Vehicle Options",
    desc: "Choose from our diverse fleet, including spacious SUVs, sprinter vans, and more. Our vehicles are equipped with modern amenities for your comfort and enjoyment.",
  },
  {
    id: 2,
    title: "Amenities",
    desc: "Select vehicles come with a range of amenities, such as Wi‑Fi, refreshments, and entertainment systems, ensuring a delightful journey.",
  },
  {
    id: 3,
    title: "Customization",
    desc: "We understand that every client is unique. That's why we offer customization options to meet your specific preferences and requirements.",
  },
  {
    id: 4,
    title: "Payment Options",
    desc: "For your convenience, we offer secure online payment options for those who wish to pay in advance. We accept major payment methods, including credit cards and PayPal.",
  },
];

export default function AdditionalInfo() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.imgContainer}>
              <Image src={Img1} fill alt='' className={styles.img} />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.rightTop}>
              <h2 className={styles.heading}>Additional Information</h2>
              <p className={styles.copy}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                esse modi provident animi odit fugit.
              </p>
            </div>
            <div className={styles.righBottom}>
              {data.map((x) => (
                <div className={styles.card} key={x.id}>
                  <h3 className={styles.title}>{x.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
