import Button from "../Button/Button";
import LayoutWrapper from "../LayoutWrapper";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./BlogSection.module.css";
import Arrow from "../../../../public/icons/right.svg";
import Image from "next/image";
import Img1 from "../../../../public/images/heroii.jpg";

const data = [
  {
    id: 1,
    title: "Article 1",
    desc: "Here are some commonly asked questions and their answers below. If you don't see your questions here, call us any time.",
  },
  {
    id: 2,
    title: "Article 2",
    desc: "Here are some commonly asked questions and their answers below. If you don't see your questions here, call us any time.",
  },
  {
    id: 3,
    title: "Article 3",
    desc: "Here are some commonly asked questions and their answers below. If you don't see your questions here, call us any time.",
  },
];

export default function BlogSection() {
  return (
    <section className={styles.container}>
      <SectionHeading title='Recent Articles' />
      <LayoutWrapper>
        <div className={styles.content}>
          {data.map((x) => (
            <div className={styles.card} key={x.id}>
              <div className={styles.cardTop}>
                {/* <span className={styles.category}>Category</span> */}
                <div className={styles.imgContainer}>
                  <Image
                    src={Img1}
                    fill
                    alt=''
                    title=''
                    className={styles.img}
                  />
                </div>
              </div>
              <div className={styles.cardBottom}>
                <h3 className={styles.title}>{x.title}</h3>
                <p className={styles.desc}>{x.desc}</p>
                <div className={styles.arrowContainer}>
                  <Arrow className={styles.arrow} />
                </div>
              </div>
            </div>
          ))}
          <div className={styles.infoBox}>
            <p className={styles.info}>
              Every day here roars with metal, grease, and freedom. We
              don&lsquo;t make news — we ride it full throttle. Check in if you
              want to stay in the loop.
            </p>
            <div className={styles.btnContainer}>
              <Button href='/' btnType='red' text='Learn more' />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
