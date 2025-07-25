"use client";
import styles from "./Nav.module.css";
import React, { useEffect, useState, CSSProperties } from "react";
import { usePathname } from "next/navigation";
// import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import Button from "../Button/Button";
// import Modal from "../Modal/Modal";
// import UserIcon from "../../../../public/icons/user.svg";
// import FalseButton from "../FalseButton/FalseButton";
import Image from "next/image";
import Img1 from "../../../../public/images/logoLight.png";
import Img2 from "../../../../public/images/logoRed.png";

export interface NavProps {
  navItemColor?: string;
  redLogo?: boolean;
  signUpBtnType?: string;
  rightLinksContent?: React.ReactNode;
}

const Nav: React.FC<NavProps> = ({
  navItemColor,
  redLogo,
  signUpBtnType = "nav",
  // rightLinksContent,
}) => {
  // const { data: session } = useSession();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  // const [userModalOpen, setUserModalOpen] = useState(false);

  const customStyles = {
    ...(navItemColor && { "--nav-item-color": navItemColor }),
    ...(redLogo && { "--logo-color": redLogo }),
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
  // const toggleModal = () => setUserModalOpen((o) => !o);

  return (
    <header className={styles.header} style={customStyles}>
      <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          <Link href='/'>
            {!redLogo && (
              <Image
                src={Img1}
                alt=''
                title=''
                className={styles.img}
                priority={true}
              />
            )}
            {redLogo && (
              <Image
                src={Img2}
                alt=''
                title=''
                className={styles.img}
                priority={true}
              />
            )}
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
              // href: "/reservations",
              href: "https://bookridesonline.com/book/?dbaid=L4JAaOi0gExXw5xek9dmgQ%3d%3d",
              // target="_blank",
              target: true,
              label: "Reservations",
              match: (p: string) => p.includes("/reservations"),
            },
            {
              href: "/services",
              label: "Services",
              match: (p: string) => p.includes("/services"),
            },
            {
              href: "/about",
              label: "about",
              match: (p: string) => p.includes("/about"),
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
          ].map(({ href, label, match, target }) => (
            <li
              key={href}
              className={styles.navItem}
              onClick={toggleMenu}
              style={{ color: "var(--nav-item-color)" }}
            >
              <Link
                href={href}
                className={match(pathname) ? styles.activeLink : ""}
                target={target ? "_blank" : ""}
                style={{ color: "var(--nav-item-color)" }}
              >
                {label}
              </Link>
            </li>
          ))}

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
              Copyright &copy; 2025 Nier Transportation ‖ All Rights Reserved ‖
              Designed & Developed By Fonts & Footers
            </p>
          </div>
        </ul>
        {/* {rightLinksContent ? (
          <div className={styles.rightLinks}>{rightLinksContent}</div>
        ) : session ? (
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
            <Button
              href='tel:+4803006003'
              text='(480) 300-6003'
              btnType={signUpBtnType}
            ></Button>
          </div>
        )} */}

        <div className={styles.rightLinks}>
          <Button
            href='tel:+4803006003'
            text='(480) 300-6003'
            btnType={signUpBtnType}
          ></Button>
        </div>

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
