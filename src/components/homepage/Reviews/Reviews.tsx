import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Reviews.module.css";
import { reviews } from "@/data";
import Image from "next/image";
import Img1 from "../../../../public/images/cadi2.jpg";

export default function Reviews() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.container}>
          <div className={styles.top}>
            <h2 className={styles.heading}>Reviews</h2>
            <p className={styles.copy}>
              Read What Our Clients Have to Say About Their Journey with Us
            </p>
          </div>
          <div className={styles.bottom}>
            {reviews.slice(0, 3).map((x) => (
              <div key={x.id} className={styles.card}>
                <span className={styles.space} />
                <div className={styles.cardContent}>
                  <div className={styles.cardLeft}>
                    <div className={styles.imgContainer}>
                      <Image
                        src={Img1}
                        alt=''
                        title=''
                        fill
                        className={styles.img}
                      />
                    </div>
                  </div>
                  <div className={styles.cardRight}>
                    <div>
                      <h3 className={styles.title}>{x.reviewer}</h3>
                      <p className={styles.review}>{x.company}</p>
                      {/* Star cluster Here */}
                    </div>
                    <p className={styles.review}>{x.review}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
