"use client";

import styles from "./AdminSideNav.module.css";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DashboardIcon from "../../../../../../public/icons/dashboard.svg";
import UserIcon from "../../../../../../public/icons/user.svg";
import BookedIcon from "../../../../../../public/icons/booked.svg";
import RevenueIcon from "../../../../../../public/icons/money.svg";
import DriverIcon from "../../../../../../public/icons/driver.svg";
import FleetIcon from "../../../../../../public/icons/fleet.svg";
import CancellationIcon from "../../../../../../public/icons/cancellation.svg";
import LogOutIcon from "../../../../../../public/icons/logout.svg";
import Star from "../../../../../../public/icons/star.svg";
import Settings from "../../../../../../public/icons/settings.svg";
import Previous from "../../../../../../public/icons/previous.svg";

const items = [
  {
    id: 1,
    title: "Dashboard",
    href: "/admin/dashboard",
    icon: <DashboardIcon className={styles.icon} />,
  },
  {
    id: 2,
    title: "Users",
    href: "/admin/dashboard/users",
    icon: <UserIcon className={styles.icon} />,
  },
  {
    id: 3,
    title: "New Ride Requests",
    href: "/admin/dashboard/unassigned-rides",
    icon: <Star className={styles.icon} />,
  },
  {
    id: 4,
    title: "Upcoming Rides",
    href: "/admin/dashboard/recently-booked",
    icon: <BookedIcon className={styles.icon} />,
  },
  {
    id: 5,
    title: "Previous Rides",
    href: "/admin/dashboard/previous-rides",
    icon: <Previous className={styles.icon} />,
  },
  {
    id: 6,
    title: "Revenue",
    href: "/admin/dashboard/revenue",
    icon: <RevenueIcon className={styles.icon} />,
  },
  {
    id: 7,
    title: "Drivers",
    href: "/admin/dashboard/drivers-online",
    icon: <DriverIcon className={styles.icon} />,
  },
  {
    id: 8,
    title: "Vehicles",
    href: "/admin/dashboard/fleet",
    icon: <FleetIcon className={styles.icon} />,
  },
  {
    id: 9,
    title: "Cancellations",
    href: "/admin/dashboard/cancellations",
    icon: <CancellationIcon className={styles.icon} />,
  },
  {
    id: 10,
    title: "Settings",
    href: "/admin/dashboard/settings",
    icon: <Settings className={styles.icon} />,
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
