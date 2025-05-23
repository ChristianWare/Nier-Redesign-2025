import { ReactNode } from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./AdminLayout.module.css";
import Footer from "@/components/shared/Footer/Footer";
import Nav from "@/components/shared/Nav/Nav";

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth();

  // 1. Unauthenticated → to /login
  if (!session) redirect("/login?callbackUrl=/admin");

  // 2. Authenticated but not an admin → home page
  if (session.user.role !== "ADMIN") redirect("/");

  // 3. Happy path – render nested pages
  return (
    <main className={styles.container}>
      <Nav
        logoColor='var(--red)'
        navItemColor='var(--red)'
        signUpBtnType='navRedOutline'
      />
      <LayoutWrapper>
        <h1 className={styles.heading}>Admin Dashboard</h1>
        {children}
      </LayoutWrapper>
      <Footer />
    </main>
  );
}
