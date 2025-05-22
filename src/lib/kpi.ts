import { prisma } from "@/lib/prisma";
import { startOfDay, startOfMonth, subMinutes } from "date-fns";

export interface Kpi {
  id: string;
  label: string;
  value: string | number;
  href: string;
}

export async function getKpis(): Promise<Kpi[]> {
  const now = new Date();
  const todayStart = startOfDay(now);
  const monthStart = startOfMonth(now);
  const fiveMinAgo = subMinutes(now, 5);

  const [
    ridesToday,
    unassigned,
    revenueAgg,
    pendingPayments,
    activeDrivers,
    fleetActive,
    cancellations,
  ] = await Promise.all([
    prisma.booking.count({
      where: { createdAt: { gte: todayStart } },
    }),

    prisma.booking.count({
      where: {
        scheduledAt: { gte: now },
        assignment: null,
        status: "CONFIRMED",
      },
    }),

    prisma.payment.aggregate({
      _sum: { amountCents: true },
      where: {
        createdAt: { gte: monthStart },
        status: "succeeded",
      },
    }),

    prisma.payment.count({
      where: {
        status: { in: ["requires_action", "processing"] },
      },
    }),

    prisma.driver.count({
      where: { lastSeenAt: { gte: fiveMinAgo } },
    }),

    prisma.vehicle.count({
      where: { active: true },
    }),

    prisma.booking.count({
      where: {
        updatedAt: { gte: monthStart },
        status: "CANCELED",
      },
    }),
  ]);

  const revenueUsd = (revenueAgg._sum.amountCents ?? 0) / 100;
  const totalUsers = await prisma.user.count();


  return [
    {
      id: "users",
      label: "Total Users",
      value: totalUsers,
      href: "/admin/dashboard/users",
    },
    {
      id: "ridesToday",
      label: "Rides Booked Today",
      value: ridesToday,
      href: "/admin/rides?filter=today",
    },
    {
      id: "unassigned",
      label: "Unassigned Rides",
      value: unassigned,
      href: "/admin/rides?filter=unassigned",
    },
    {
      id: "revenue",
      label: "Revenue (MTD)",
      value: `$${revenueUsd.toLocaleString()}`,
      href: "/admin/reports/revenue",
    },
    {
      id: "pendingPayments",
      label: "Pending Payments",
      value: pendingPayments,
      href: "/admin/payments?filter=pending",
    },
    {
      id: "driversOnline",
      label: "Drivers Online",
      value: activeDrivers,
      href: "/admin/drivers?filter=online",
    },
    {
      id: "fleetActive",
      label: "Vehicles In Service",
      value: fleetActive,
      href: "/admin/vehicles",
    },
    {
      id: "cancellations",
      label: "Cancellations (MTD)",
      value: cancellations,
      href: "/admin/reports/cancellations",
    },
  ];
}
