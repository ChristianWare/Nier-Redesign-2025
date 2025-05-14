import styles from "./Areas.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Image from "next/image";
import ImgBg from "../../../../public/images/areas.jpg";
import ImgA from "../../../../public/images/specialevents.jpg";
import ImgB from "../../../../public/images/distance.jpg";

export default function Areas() {
  return (
    <section className={styles.container}>
      <div className={styles.imgContainer}>
        <div className={styles.imgOverlay} />
        <Image
          src={ImgBg}
          alt='map of Arizona'
          priority
          fill
          className={styles.img}
        />

        <LayoutWrapper>
          <div className={styles.content}>
            <div className={styles.contentTop}>
              <h2 className={styles.heading}>
                Explore
                <span className={styles.inlineImage1}>
                  <Image
                    src={ImgA}
                    alt='Sedona'
                    fill
                    className={styles.imgii}
                  />
                </span>
                the areas we service
                <span className={styles.inlineImage2}>
                  <Image
                    src={ImgB}
                    alt='Phoenix skyline'
                    fill
                    className={styles.imgii}
                  />
                </span>
                in all of Arizona
              </h2>
            </div>
          </div>
        </LayoutWrapper>
      </div>
    </section>
  );
}
