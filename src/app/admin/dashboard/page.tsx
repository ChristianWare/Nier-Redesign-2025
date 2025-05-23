// src/app/admin/dashboard/page.tsx
import styles from "./Dashboard.module.css";
import { getKpis } from "@/lib/kpi";
import KpiCard from "./components/KpiCard/KpiCard";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const revalidate = 60;

export default async function DashboardPage() {
  const session = await auth();

  // ← check & redirect if unauthenticated
  if (!session) {
    redirect("/auth/login?callbackUrl=/admin/dashboard");
  }

  // now TS knows session is not null
  const displayName = session.user.name ?? session.user.email;
  const kpis = await getKpis();

  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>Hi, {displayName}</h1>
      <div className={styles.content}>
        {kpis.map((kpi) => (
          <KpiCard
            key={kpi.id}
            label={kpi.label}
            value={kpi.value}
            href={kpi.href}
          />
        ))}
      </div>
    </main>
  );
}
