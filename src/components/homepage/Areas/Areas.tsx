import styles from "./Areas.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Image from "next/image";
import Img1 from '../../../../public/images/areas.jpg'

export default function Areas() {
  return (
    <section className={styles.container}>
      <div className={styles.imgContainer}>
        <div className={styles.imgOverlay}></div>
        <Image
          src={Img1}
          alt=''
          title=''
          priority
          fill
          className={styles.img}
        />

        <LayoutWrapper>
          <div className={styles.content}>
            <div className={styles.contentTop}>
              <div className={styles.left}>
                <h2 className={styles.heading}>Areas We service</h2>
              </div>
              <div className={styles.right}>
                <p className={styles.copy}>
                  At Nier Transportation, we&rsquo;re more than a car service;
                  we&rsquo;re your trusted partner in high end transportation.
                </p>
              </div>
            </div>
          </div>
        </LayoutWrapper>
      </div>
    </section>
  );
}
