import styles from "./AccountPage.module.css";
import { getUserKpis } from "@/lib/kpi";
import KpiCard from "../admin/dashboard/components/KpiCard/KpiCard";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const revalidate = 60;

export default async function AccountPage() {
  // 1) Ensure we have a logged-in user
  const session = await auth();
  if (!session) {
    redirect("/auth/login?callbackUrl=/dashboard");
  }

  // 2) Fetch the KPIs for this user
  const kpis = await getUserKpis(session.user.id);

  return (
    <section className={styles.container}>
      <h1 className={styles.heading}>Your Dashboard</h1>
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
    </section>
  );
}
