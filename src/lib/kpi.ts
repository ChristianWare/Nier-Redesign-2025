import { prisma } from "@/auth"; // your global Prisma client
// import { startOfMonth } from "date-fns";

export type Kpi = {
  id: string;
  label: string;
  value: number | string;
  href: string; // ← NEW
};

export async function getKpis(): Promise<Kpi[]> {
  // ❶ total users
  const totalUsers = await prisma.user.count();




  // const totalPosts = await prisma.blogPost.count({
  //   where: { published: true },
  // });

  return [
    {
      id: "users",
      label: "Total Users",
      value: totalUsers,
      href: "/admin/dashboard/users",
    },
    {
      id: "companies",
      label: "Active Companies",
      value: '',
      href: "/admin/dashboard/companies",
    },
    {
      id: "projects",
      label: "Projects In Progress",
      value: '',
      href: "/admin/dashboard/projects",
    },
    {
      id: "invoices",
      label: "Outstanding Invoices",
      value: '',
      href: "/admin/dashboard/invoices",
    },
    {
      id: "revenue",
      label: "Revenue This Month",
      value: "",
      href: "/admin/dashboard/payments",
    },
    // {
    //   id: "blog",
    //   label: "Published Posts",
    //   value: totalPosts,
    //   href: "/admin/dashboard/blog",
    // },
  ];
}
