import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";
import styles from "./AboutAndHistory.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Image from "next/image";
import Chauffeur from "../../../../public/images/chauffeur.jpg";
import BookingButton from "@/components/homepage/BookingButton/BookingButton";

const data = [
  {
    id: 1,
    title: "A Legacy of Excellence in Black Car Service",
    description:
      "Since our inception, Nier Transportation has been dedicated to providing exceptional black car service, ensuring luxury and reliability for all our clients.",
  },
  {
    id: 2,
    title: "From Local Roots to Statewide Recognition",
    description:
      "Founded in 2004, we have grown from serving our local community to becoming a trusted name in black car services across Arizona.",
  },
  {
    id: 3,
    title: "Commitment to Quality and Comfort",
    description:
      "Our unwavering commitment to quality and comfort is what sets us apart, making every journey with Nier Transportation a superior experience.",
  },
] as const;

// const dataii = [
//   {
//     id: 4,
//     title: "Professional Chauffeurs",
//     description:
//       "Our team of drivers is dedicated to providing you with top-notch service.",
//   },
//   {
//     id: 5,
//     title: "Safety & Comfort",
//     description:
//       "They're trained in safe driving and know Arizona roads inside out—ensuring a smooth, secure trip while you relax.",
//   },
//   {
//     id: 6,
//     title: "Comprehensive Coverage",
//     description:
//       "Need airport transfers, corporate travel, or event transport? We've got you covered!",
//   },
// ] as const;

export default function AboutAndHistory() {
  return (
    <section className={styles.container}>
      <SectionHeading title='Nier Transportation' />
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={styles.heading}>Our Story</h2>
            <h3 className={styles.subHeading}>Established in 2004</h3>
          </div>
          <div className={styles.middle}>
            <div className={styles.left}>
              <p className={styles.copy}>
                Founded in 2004, Nier Transportation was born out of a passion
                for delivering exceptional transportation experiences. Our
                journey began with a single luxury vehicle, and today, we have a
                large fleet of cars, serving hundreds of satisfied clients.
              </p>
              <div className={styles.imgContainer}>
                <Image
                  src={Chauffeur}
                  fill
                  alt=''
                  title=''
                  className={styles.img}
                />
              </div>
            </div>
            <div className={styles.right}>
              {data.map((x) => (
                <div className={styles.card} key={x.id}>
                  <h4 className={styles.title}>{x.title}</h4>
                  <p className={styles.description}>{x.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.leftii}>
              {/* {dataii.map((x) => (
                <div className={styles.card} key={x.id}>
                  <h4 className={styles.title}>{x.title}</h4>
                  <p className={styles.description}>{x.description}</p>
                </div>
              ))} */}
              <BookingButton text='Book Here • Book Here • Book Here • Book Here •' />{" "}
            </div>
            <div className={styles.rightii}>
              <h3 className={styles.headingii}>
                Arrive Early. <br /> Arrive Elegant. <br /> Arrive Nier.
              </h3>
              <p className={styles.copyii}>
                A single promise has driven us since day one: every guest
                deserves the ease, safety, and quiet luxury normally reserved
                for private aviation.
              </p>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
