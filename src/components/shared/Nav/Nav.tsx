"use client";
import styles from "./Nav.module.css";
import React, { useEffect, useState, CSSProperties } from "react";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import UserIcon from "../../../../public/icons/user.svg";
import FalseButton from "../FalseButton/FalseButton";

export interface NavProps {
  navItemColor?: string;
  logoColor?: string;
  signUpBtnType?: string;
  rightLinksContent?: React.ReactNode;
}

const Nav: React.FC<NavProps> = ({
  navItemColor,
  logoColor,
  signUpBtnType = "nav",
  rightLinksContent,
}) => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [userModalOpen, setUserModalOpen] = useState(false);

  const customStyles = {
    ...(navItemColor && { "--nav-item-color": navItemColor }),
    ...(logoColor && { "--logo-color": logoColor }),
  } as CSSProperties;

  useEffect(() => {
    const body = document.body;
    body.style.overflow =
      window.innerWidth <= 910 && isOpen ? "hidden" : "auto";

    const handleResize = () => setIsOpen(false);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      body.style.overflow = "auto";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((o) => !o);
  const toggleModal = () => setUserModalOpen((o) => !o);

  return (
    <header className={styles.header} style={customStyles}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link href='/' className={styles.logo}>
            Nier Transportation
          </Link>
        </div>
        <ul
          className={
            !isOpen ? styles.navMenu : `${styles.navMenu} ${styles.active}`
          }
        >
          {[
            { href: "/", label: "Home", match: (p: string) => p === "/" },
            {
              href: "/reservations",
              label: "Reservations",
              match: (p: string) => p.includes("/reservations"),
            },
            {
              href: "/services",
              label: "Services",
              match: (p: string) => p.includes("/services"),
            },
            {
              href: "/company",
              label: "Company",
              match: (p: string) => p.includes("/company"),
            },
            // {
            //   href: "/blog",
            //   label: "Blog",
            //   match: (p: string) => p.includes("/blog"),
            // },
            {
              href: "/contact",
              label: "Contact",
              match: (p: string) => p.includes("/contact"),
            },
          ].map(({ href, label, match }) => (
            <li
              key={href}
              className={styles.navItem}
              onClick={toggleMenu}
              style={{ color: "var(--nav-item-color)" }}
            >
              <Link
                href={href}
                className={match(pathname) ? styles.activeLink : ""}
                style={{ color: "var(--nav-item-color)" }}
              >
                {label}
              </Link>
            </li>
          ))}

          {/* phone link (mobile menu only) */}
          <li className={styles.navItem} onClick={toggleMenu}>
            <a
              href='tel:+14803006003'
              className={styles.mobilePhone}
              style={{ color: "var(--nav-item-color)" }}
            >
              480-300-6003
            </a>
          </li>

          <div className={styles.bottom}>
            <p className={styles.copy}>
              Copyright &copy; 2024 Nier Transportation ‖ All Rights Reserved ‖
              Designed & Developed By Fonts & Footers
            </p>
          </div>
        </ul>

        {/* -------------  Right-side actions ------------- */}
        {rightLinksContent ? (
          <div className={styles.rightLinks}>{rightLinksContent}</div>
        ) : session ? (
          /* --------- user logged-in: show avatar / modal ---------- */
          <div className={styles.rightLinks}>
            <button
              type='button'
              aria-label='User menu'
              onClick={toggleModal}
              className={styles.userBtn}
            >
              <UserIcon className={styles.icon} />
            </button>
            <Modal isOpen={userModalOpen} onClose={toggleModal}>
              <div className={styles.userModal}>
                <p className={styles.welcome}>
                  Hi, {session.user.name ?? session.user.email}
                </p>
                <div className={styles.btnContainer}>
                  <Button
                    btnType='black'
                    onClick={toggleModal}
                    text='My Dashboard'
                    href={
                      session.user.role === "ADMIN"
                        ? "/admin/dashboard"
                        : "/dashboard"
                    }
                  />

                  <FalseButton
                    text='Sign Out'
                    btnType='red'
                    onClick={() => {
                      toggleModal();
                      signOut({ callbackUrl: "/" });
                    }}
                  />
                </div>
              </div>
            </Modal>
          </div>
        ) : (
          /* --------- no session: show login / signup ---------- */
          <div className={styles.rightLinks}>
            <Link
              href='/auth/login'
              className={styles.phone}
              style={{ color: "var(--nav-item-color)" }}
            >
              LOG&nbsp;IN
            </Link>
            <Button
              btnType={signUpBtnType}
              href='/auth/register'
              text='Sign Up'
            />
          </div>
        )}

        {/* -------------  Burger ------------- */}
        <span
          className={
            !isOpen ? styles.hamburger : `${styles.hamburger} ${styles.active}`
          }
          onClick={toggleMenu}
        >
          <span className={styles.tanBar}></span>
          <span className={styles.tanBar}></span>
          <span className={styles.tanBar}></span>
        </span>
      </nav>
    </header>
  );
};

export default Nav;
