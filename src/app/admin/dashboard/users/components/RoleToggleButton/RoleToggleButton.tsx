/* eslint-disable @typescript-eslint/no-unused-vars */
// components/RoleToggleButton/RoleToggleButton.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "@/components/shared/Modal/Modal";
import styles from "./RoleToggleButton.module.css";
import FalseButton from "@/components/shared/FalseButton/FalseButton";

type Role = "ADMIN" | "DRIVER" | "CUSTOMER";

interface Props {
  userId: string;
  currentRole: Role;
  targetRole: Exclude<Role, "CUSTOMER">; // either "ADMIN" or "DRIVER"
}

export default function RoleToggleButton({
  userId,
  currentRole,
  targetRole,
}: Props) {
  const [loading, setLoading] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const router = useRouter();

  // are they currently in the target role?
  const isActive = currentRole === targetRole;
  // what field do we send to the API?
  const flagName = targetRole === "ADMIN" ? "makeAdmin" : "makeDriver";

  const nextRole: Role = isActive ? "CUSTOMER" : targetRole;
  const actionVerb = isActive ? "Revoke" : "Make";
  const modalText = `${actionVerb.toLowerCase()} ${targetRole.toLowerCase()} rights for this user?`;

  async function toggleRole() {
    setLoading(true);
    try {
      const res = await fetch(`/api/users/${userId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ [flagName]: !isActive }),
      });
      if (!res.ok) throw new Error(await res.text());
      router.refresh();
    } catch (err) {
      console.error(err);
      alert("Failed to update role.");
    } finally {
      setLoading(false);
      setConfirmOpen(false);
    }
  }

  return (
    <>
      <button
        type='button'
        role='switch'
        aria-checked={isActive}
        disabled={loading}
        onClick={() => setConfirmOpen(true)}
        className={
          isActive
            ? `${styles.toggle} ${styles.toggleOn}`
            : `${styles.toggle} ${styles.toggleOff}`
        }
      >
        <span
          className={
            isActive
              ? `${styles.handle} ${styles.handleOn}`
              : `${styles.handle} ${styles.handleOff}`
          }
        />
      </button>

      <Modal isOpen={confirmOpen} onClose={() => setConfirmOpen(false)}>
        <p>{modalText}</p>
        <div className={styles.btnContainer}>
          <FalseButton
            onClick={() => setConfirmOpen(false)}
            btnType='redOutline'
            text='Cancel'
          />
          <FalseButton
            onClick={toggleRole}
            disabled={loading}
            btnType='red'
            text={loading ? "…" : "Yes"}
          />
        </div>
      </Modal>
    </>
  );
}
