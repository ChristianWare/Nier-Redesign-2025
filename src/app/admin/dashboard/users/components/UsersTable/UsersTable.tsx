/* eslint-disable @typescript-eslint/no-explicit-any */
// app/admin/users/components/UsersTable.tsx
"use client";

import { useState } from "react";
import { format } from "date-fns";
import RoleToggleButton from "../RoleToggleButton/RoleToggleButton";
import Check from "../../../../../../../public/icons/check.svg";
import styles from "../../Users.module.css";

type RoleType = "ADMIN" | "CUSTOMER" | "DRIVER";
interface User {
  id: string;
  name: string | null;
  email: string;
  role: RoleType;
  createdAt: Date; // comes down as ISO string
}

export default function UsersTable({ users }: { users: User[] }) {
  const [filter, setFilter] = useState<"ALL" | "ADMIN" | "DRIVER" | "CLIENT">(
    "ALL"
  );

  const filtered = users.filter((u) => {
    if (filter === "ALL") return true;
    if (filter === "CLIENT") return u.role === "CUSTOMER";
    return u.role === filter;
  });

  return (
    <>
      {/* ========== FILTER BAR ========== */}
      <div className={styles.filterContainer}>
        {[
          { label: "All", value: "ALL" },
          { label: "Admin", value: "ADMIN" },
          { label: "Drivers", value: "DRIVER" },
          { label: "Clients", value: "CLIENT" },
        ].map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setFilter(value as any)}
            className={
              filter === value
                ? `${styles.filterTab} ${styles.filterTabActive}`
                : styles.filterTab
            }
          >
            {label}
          </button>
        ))}
      </div>

      {/* ========== USERS TABLE ========== */}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Joined</th>
            <th>Admin</th>
            <th>Driver</th>
            <th>Client</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((u) => (
            <tr key={u.id}>
              <td>{u.name ?? "—"}</td>
              <td>{u.email}</td>
              <td>
                <span className={styles.roleBadge} data-role={u.role}>
                  {u.role}
                </span>
              </td>
              <td>{format(new Date(u.createdAt), "MMM d, yyyy")}</td>
              <td>
                <RoleToggleButton
                  userId={u.id}
                  currentRole={u.role}
                  targetRole='ADMIN'
                />
              </td>
              <td>
                <RoleToggleButton
                  userId={u.id}
                  currentRole={u.role}
                  targetRole='DRIVER'
                />
              </td>
              <td className={styles.clientCell}>
                {u.role === "CUSTOMER" && <Check className={styles.icon} />}
              </td>
            </tr>
          ))}
          {filtered.length === 0 && (
            <tr>
              <td colSpan={7} className={styles.empty}>
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}
