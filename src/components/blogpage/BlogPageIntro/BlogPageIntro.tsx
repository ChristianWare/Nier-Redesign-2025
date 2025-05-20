import Nav from "@/components/shared/Nav/Nav";
import styles from "./BlogPageIntro.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Image from "next/image";
import Blog from "../../../../public/images/blog.jpg";
import BlogFilter from "../BlogFilter/BlogFilter";

export default function BlogPageIntro() {
  return (
    <section className={styles.container}>
      <Nav
        logoColor='var(--red)'
        navItemColor='var(--red)'
        signUpBtnType='navRedOutline'
      />
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.imgContainer}>
              <Image src={Blog} fill alt='' title='' className={styles.img} />
            </div>
            <h1 className={styles.heading}>
              Explore our blog for the latest updates, travel tips, and industry
              insights to enhance your black car service experience.
            </h1>
          </div>
          <div className={styles.bottom}>
            <BlogFilter />
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
