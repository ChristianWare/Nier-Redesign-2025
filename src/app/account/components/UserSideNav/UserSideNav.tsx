"use client";

import styles from "./UserSideNav.module.css";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DashboardIcon from "../../../../../public/icons/dashboard.svg";
import UserIcon from "../../../../../public/icons/user.svg";
import LogOutIcon from "../../../../../public/icons/logout.svg";
import Star from "../../../../../public/icons/star.svg";
import Previous from "../../../../../public/icons/previous.svg";
import Book from "../../../../../public/icons/book.svg";
import Support from "../../../../../public/icons/support.svg";
import Location from "../../../../../public/icons/location.svg";

const items = [
  {
    id: 1,
    title: "Dashboard",
    href: "/admin/dashboard",
    icon: <DashboardIcon className={styles.icon} />,
  },
  {
    id: 2,
    title: "Book a Ride",
    href: "/admin/dashboard/users",
    icon: <Book className={styles.icon} />,
  },
  {
    id: 3,
    title: "Upcoming Rides",
    href: "/admin/dashboard/unassigned-rides",
    icon: <Star className={styles.icon} />,
  },
  {
    id: 4,
    title: "Past Rides",
    href: "/admin/dashboard/recently-booked",
    icon: <Previous className={styles.icon} />,
  },
  {
    id: 5,
    title: "Saved Locations",
    href: "/admin/dashboard/previous-rides",
    icon: <Location className={styles.icon} />,
  },
  {
    id: 6,
    title: "Profile",
    href: "/admin/dashboard/revenue",
    icon: <UserIcon className={styles.icon} />,
  },
  {
    id: 7,
    title: "Support / Help	",
    href: "/admin/dashboard/drivers-online",
    icon: <Support className={styles.icon} />,
  },
];

export default function UserSideNav() {
  const pathname = usePathname();

  const handleLogout = () => {
    // your logout logic here
  };
  return (
    <div>
      <nav className={styles.container}>
        <ul className={styles.list}>
          {items.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li
                key={item.id}
                className={`${styles.listItem} ${isActive ? styles.active : ""}`}
              >
                <Link href={item.href} className={styles.link}>
                  {item.icon}
                  {item.title}
                </Link>
              </li>
            );
          })}

          <li className={styles.listItem} onClick={handleLogout}>
            <LogOutIcon className={styles.icon} />
            Log Out
          </li>
        </ul>
      </nav>
    </div>
  );
}
