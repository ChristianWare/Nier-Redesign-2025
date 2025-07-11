"use client";

import styles from "./ServiceSlugPageIntro.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Nav from "@/components/shared/Nav/Nav";
import { useParams } from "next/navigation";
import Link from "next/link";
import { services } from "@/data";
import Image from "next/image";
import Button from "@/components/shared/Button/Button";

export default function ServiceSlugPageIntro() {
  const params = useParams();
  const slug = params.slug as string;
  const project = services.find((p) => p.slug === slug);

  return (
    <section className={styles.container}>
      <Nav redLogo navItemColor='var(--red)' signUpBtnType='navRedOutline' />
      <LayoutWrapper>
        <div className={styles.content}>
          {!project ? (
            <div className={styles.container}>
              <h1 className={styles.heading}>Service not found</h1>
              <Link href='/projects'>Back to services</Link>
            </div>
          ) : (
            <div className={styles.container}>
              <div className={styles.top}>
                <h1 className={styles.heading}>{project.title}</h1>
                <div className={styles.imgContainer}>
                  <Image
                    src={project.src}
                    fill
                    alt=''
                    title=''
                    className={styles.img}
                  />
                </div>
              </div>
              <div className={styles.bottom}>
                <div className={styles.b1}>
                  <div className={styles.description}>Details:</div>
                  <h2 className={styles.copy}>{project.copy}</h2>
                  <div className={styles.space}></div>
                  <p className={styles.desc}>{project.description}</p>
                  <div className={styles.space}></div>
                  <div className={styles.imgContainer}>
                    <Image
                      src={project.src2}
                      fill
                      alt=''
                      title=''
                      className={styles.img}
                    />
                  </div>
                  <div className={styles.space}></div>
                  <div className={styles.featureContainer}>
                    {project.features.map((x) => (
                      <div className={styles.card} key={x.id}>
                        <div className={styles.indexContainer}>
                          <span className={styles.index}>{x.id}</span>
                        </div>
                        <h3 className={styles.featureTitle}>{x.title}</h3>
                        <p className={styles.featureDetails}>{x.details}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles.btnContainer}>
                <Button
                  href='/services'
                  text='Back to all services'
                  btnType='red'
                />
              </div>
            </div>
          )}{" "}
        </div>
      </LayoutWrapper>
    </section>
  );
}
