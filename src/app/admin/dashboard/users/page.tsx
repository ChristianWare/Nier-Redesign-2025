import styles from "./Users.module.css";
import { prisma } from "@/lib/prisma";
import UsersTable from "./components/UsersTable/UsersTable";

export const revalidate = 60;

export default async function UsersPage() {
  // Fetch ALL users once on the server
  const users = await prisma.user.findMany({
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
    },
  });

  return (
    <section>
      <h1 className={styles.heading}>Users</h1>
      {/* Pass the Date objects straight into the client component */}
      <UsersTable users={users} />
    </section>
  );
}
