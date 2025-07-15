import { auth } from "../../../auth";

export default async function DashboardPage() {
  const session = await auth();
  return (
    <div>
      <h1>{session?.user.name}'s Dashboard</h1>
    </div>
  );
}
