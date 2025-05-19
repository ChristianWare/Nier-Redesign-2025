import styles from "./AboutPageIntro.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Nav from "@/components/shared/Nav/Nav";
import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";
import Image from "next/image";
import Img1 from "../../../../public/images/heroii.jpg";
import Img2 from "../../../../public/images/cadi2.jpg";
import Img3 from "../../../../public/images/casaGrandeii.jpg";
import BookingButton from "@/components/homepage/BookingButton/BookingButton";

export default function AboutPageIntro() {
  return (
    <section className={styles.container}>
      <Nav
        logoColor='var(--red)'
        navItemColor='var(--red)'
        signUpBtnType='navRedOutline'
      />
      <LayoutWrapper>
        <div className={styles.SectionHeadingContainer}>
          <SectionHeading title='About Us' />
        </div>
        <div className={styles.content}>
          <div className={styles.top}>
            <h1 className={styles.heading}>Get to know us better</h1>
            <span className={styles.span}>Average Guest Review</span>
            <span className={styles.starContainer}>
              <span className={styles.star}></span>
              <span className={styles.star}></span>
              <span className={styles.star}></span>
              <span className={styles.star}></span>
              <span className={styles.star}></span>
            </span>
          </div>
          <div className={styles.bottom}>
            <div className={styles.BookingBtnContainer}>
              <BookingButton text='Book Here • Book Here • Book Here • Book Here •' />
            </div>
            <div className={styles.bottomLeft}>
              <div className={styles.ImgContainer}>
                <Image src={Img1} fill alt='' title='' className={styles.img} />
              </div>
            </div>
            <div className={styles.bottomRight}>
              <div className={styles.ImgContainer2}>
                <Image src={Img2} fill alt='' title='' className={styles.img} />
              </div>
              <div className={styles.ImgContainer3}>
                <Image src={Img3} fill alt='' title='' className={styles.img} />
              </div>
            </div>
          </div>
          <div className={styles.textContainer}>
            <p className={styles.textHeading}>
              At Nier Transportation, we&lsquo;re more than a car service;
              we&lsquo;re your trusted partner in high end transportation. With
              a passion for providing the best car service in the Phoenix Metro
              area, we&lsquo;ve been serving the Arizona community for 20 years.
              Our mission is clear: to provide an unparalleled, high end, late
              model car service near you while ensuring your comfort, safety,
              and peace of mind.
            </p>
            <div className={styles.textContainerBottom}>
              <div className={styles.textContainerBottomLeft}>
                <span className={styles.sectionHeading}>About us</span>
                <p className={styles.text}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Impedit quaerat quasi fuga laborum doloremque eligendi, soluta
                  minima nam sequi perferendis cum voluptates quos officiis
                  inventore ducimus iusto fugiat similique, ad sit, non tempore
                  dolores laboriosam. Suscipit assumenda, unde accusantium
                  officia soluta aut fugiat magnam architecto libero nesciunt
                  inventore non illo.
                </p>
              </div>
              <p className={styles.text}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Impedit quaerat quasi fuga laborum doloremque eligendi, soluta
                minima nam sequi perferendis cum voluptates quos officiis
                inventore ducimus iusto fugiat similique, ad sit, non tempore
                dolores laboriosam. Suscipit assumenda, unde accusantium officia
                soluta aut fugiat magnam architecto libero nesciunt inventore
                non illo.
              </p>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
