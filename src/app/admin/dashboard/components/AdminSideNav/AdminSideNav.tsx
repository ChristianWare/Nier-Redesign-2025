"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./AdminSideNav.module.css";

import DashboardIcon from "../../../../../../public/icons/dashboard.svg";
import UserIcon from "../../../../../../public/icons/user.svg";
import BookedIcon from "../../../../../../public/icons/booked.svg";
import UnassignedIcon from "../../../../../../public/icons/unassigned.svg";
import RevenueIcon from "../../../../../../public/icons/money.svg";
import DriverIcon from "../../../../../../public/icons/driver.svg";
import FleetIcon from "../../../../../../public/icons/fleet.svg";
import CancellationIcon from "../../../../../../public/icons/cancellation.svg";
import LogOutIcon from "../../../../../../public/icons/logout.svg";

const items = [
  {
    id: 1,
    title: "Dashboard",
    href: "/admin/dashboard",
    icon: <DashboardIcon className={styles.icon} />,
  },
  {
    id: 2,
    title: "Total Users",
    href: "/admin/dashboard/total-users",
    icon: <UserIcon className={styles.icon} />,
  },
  {
    id: 3,
    title: "Upcoming Rides",
    href: "/admin/dashboard/recently-booked",
    icon: <BookedIcon className={styles.icon} />,
  },
  {
    id: 4,
    title: "Unassigned Rides",
    href: "/admin/dashboard/unassigned-rides",
    icon: <UnassignedIcon className={styles.icon} />,
  },
  {
    id: 5,
    title: "Revenue",
    href: "/admin/dashboard/revenue",
    icon: <RevenueIcon className={styles.icon} />,
  },
  {
    id: 6,
    title: "Drivers",
    href: "/admin/dashboard/drivers-online",
    icon: <DriverIcon className={styles.icon} />,
  },
  {
    id: 7,
    title: "Fleet",
    href: "/admin/dashboard/fleet",
    icon: <FleetIcon className={styles.icon} />,
  },
  {
    id: 8,
    title: "Cancellations",
    href: "/admin/dashboard/cancellations",
    icon: <CancellationIcon className={styles.icon} />,
  },
];

export default function AdminSideNav() {
  const pathname = usePathname();

  const handleLogout = () => {
    // your logout logic here
  };

  return (
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
  );
}
