
import styles from "./KpiCard.module.css";
import Link from "next/link";

export default function KpiCard({
  label,
  value,
  href,
}: {
  label: string;
  value: number | string;
  href: string;
}) {
  const numericValue = Number(value);
  const displayValue = numericValue >= 1 ? numericValue : 0;

  return (
    <Link href={href} className={styles.link}>
      <article className={styles.card}>
        <h3 className={styles.value}>{displayValue}</h3>
        <p className={styles.label}>{label}</p>
      </article>
    </Link>
  );
}