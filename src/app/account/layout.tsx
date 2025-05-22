import styles from './UserLayout.module.css'
import Footer from "@/components/shared/Footer/Footer";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Nav from "@/components/shared/Nav/Nav";
import { ReactNode } from "react";

export default function UserLayout({
  children,
}: {
  children: ReactNode;
}) {
    
  return (
    <main className={styles.container}>
      <Nav
        logoColor='var(--red)'
        navItemColor='var(--red)'
        signUpBtnType='navRedOutline'
      />
      <LayoutWrapper>{children}</LayoutWrapper>
      <Footer />
    </main>
  );
}