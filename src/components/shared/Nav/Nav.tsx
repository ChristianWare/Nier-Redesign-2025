"use client";
import React, { useEffect, useState, CSSProperties } from "react";
import { usePathname } from "next/navigation";
import styles from "./Nav.module.css";
import Button from "../Button/Button";
import Link from "next/link";

export interface NavProps {
  navItemColor?: string;
  logoColor?: string;
  signUpBtnType?: string;
  /**
   * If you want to completely replace
   * what's in the `.rightLinks` div,
   * e.g. custom login / signup markup
   */
  rightLinksContent?: React.ReactNode;
}

const Nav: React.FC<NavProps> = ({
  navItemColor,
  logoColor,
  signUpBtnType = "nav",
  rightLinksContent,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // apply CSS variables only if user passed them in
  const customStyles = {
    ...(navItemColor && { "--nav-item-color": navItemColor }),
    ...(logoColor && { "--logo-color": logoColor }),
  } as CSSProperties;

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      body.style.overflow =
        window.innerWidth <= 910 && isOpen ? "hidden" : "auto";
    }
    const handleResize = () => setIsOpen(false);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (body) body.style.overflow = "auto";
    };
  }, [isOpen]);

  const openMenu = () => setIsOpen((o) => !o);

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
              href: "/about",
              label: "About",
              match: (p: string) => p.includes("/about"),
            },
            {
              href: "/services",
              label: "Services",
              match: (p: string) => p.includes("/services"),
            },
            {
              href: "/blog",
              label: "Blog",
              match: (p: string) => p.includes("/blog"),
            },
            {
              href: "/contact",
              label: "Contact",
              match: (p: string) => p.includes("/contact"),
            },
          ].map(({ href, label, match }) => (
            <li
              key={href}
              className={styles.navItem}
              onClick={openMenu}
              /* inline style picks up --nav-item-color */
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

          <li className={styles.navItem} onClick={openMenu}>
            <a
              href='tel:+4803006003'
              className={styles.mobilePhone}
              style={{ color: "var(--nav-item-color)" }}
            >
              480-300-6003
            </a>
          </li>

          <div className={styles.bottom}>
            <p className={styles.copy}>
              Copyright &copy; 2024 Nier Transportation ‖ All Rights Reserved ‖
              Designed and Developed By Fonts & Footers
            </p>
          </div>
        </ul>

        {rightLinksContent ? (
          <div className={styles.rightLinks}>{rightLinksContent}</div>
        ) : (
          <div className={styles.rightLinks}>
            <Link
              href='/auth/login'
              className={styles.phone}
              style={{ color: "var(--nav-item-color)" }}
            >
              LOG IN
            </Link>
            <Button
              btnType={signUpBtnType}
              href='/auth/register'
              text='Sign Up'
            />
          </div>
        )}

        <span
          className={
            !isOpen ? styles.hamburger : `${styles.hamburger} ${styles.active}`
          }
          onClick={openMenu}
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
