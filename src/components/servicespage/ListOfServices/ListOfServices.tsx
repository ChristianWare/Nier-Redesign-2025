import styles from "./ListOfServices.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Image from "next/image";

import Button from "@/components/shared/Button/Button";
import { services } from "@/data";

export default function ListOfServices() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.bottom}>
            {services.map((x) => (
              <div className={styles.card} key={x.id}>
                <div className={styles.imgContainer}>
                  <Image
                    src={x.src}
                    alt=''
                    title=''
                    fill
                    className={styles.img}
                  />
                </div>
                <div className={styles.cardBottom}>
                  <h3 className={styles.title}>{x.title}</h3>
                  <div className={styles.descBtnContainer}>
                    <p className={styles.description}>{x.copy}</p>
                    <div className={styles.btnContainer}>
                      <Button
                        href={`/services/${x.slug}`}
                        btnType='black'
                        text='learn more'
                      />
                    </div>
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
