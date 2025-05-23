//   /lib/kpi.ts
//   -------------------------------------------------

import { prisma } from "@/lib/prisma";
import {
  startOfDay,
  startOfMonth,
  startOfYear,
  addDays,
  subMinutes,
} from "date-fns";

export interface Kpi {
  id: string;
  label: string;
  value: string | number;
  href: string;
}

/* ───────────────────────────────  ADMIN  ─────────────────────────────── */

export async function getAdminKpis(): Promise<Kpi[]> {
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
    totalUsers,
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
      where: { status: { in: ["requires_action", "processing"] } },
    }),
    prisma.driver.count({
      where: { lastSeenAt: { gte: fiveMinAgo } },
    }),
    prisma.vehicle.count({ where: { active: true } }),
    prisma.booking.count({
      where: {
        updatedAt: { gte: monthStart },
        status: "CANCELED",
      },
    }),
    prisma.user.count(),
  ]);

  const revenueUsd = (revenueAgg._sum.amountCents ?? 0) / 100;

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

/* ───────────────────────────────  USER  ─────────────────────────────── */

export async function getUserKpis(userId: string): Promise<Kpi[]> {
  const now = new Date();
  const yearStart = startOfYear(now);

  const [upcoming, past, spendAgg, distanceAgg] = await Promise.all([
    prisma.booking.count({
      where: {
        userId,
        scheduledAt: { gte: now },
        status: { in: ["CONFIRMED", "IN_PROGRESS"] },
      },
    }),
    prisma.booking.count({
      where: {
        userId,
        scheduledAt: { lt: now },
        status: { in: ["COMPLETED", "CANCELED"] },
      },
    }),
    prisma.payment.aggregate({
      _sum: { amountCents: true },
      where: {
        booking: { userId },
        createdAt: { gte: yearStart },
        status: "succeeded",
      },
    }),
    prisma.booking.aggregate({
      _sum: { distanceM: true },
      where: {
        userId,
        scheduledAt: { gte: yearStart },
        status: "COMPLETED",
      },
    }),
  ]);

  const spendUsd = (spendAgg._sum.amountCents ?? 0) / 100;
  const milesYear = ((distanceAgg._sum.distanceM ?? 0) / 1609.34).toFixed(1);

  return [
    {
      id: "upcoming",
      label: "Upcoming Rides",
      value: upcoming,
      href: "/dashboard/upcoming",
    },
    {
      id: "past",
      label: "Past Rides",
      value: past,
      href: "/dashboard/history",
    },
    {
      id: "spendYear",
      label: "Spend YTD",
      value: `$${spendUsd.toLocaleString()}`,
      href: "/dashboard/history",
    },
    {
      id: "milesYear",
      label: "Miles YTD",
      value: milesYear,
      href: "/dashboard/history",
    },
  ];
}

/* ───────────────────────────────  DRIVER  ───────────────────────────── */

export async function getDriverKpis(driverId: string): Promise<Kpi[]> {
  const now = new Date();
  const todayStart = startOfDay(now);
  const tomorrow = addDays(todayStart, 1);

  const [assignedToday, completedToday, upcoming, earningsAgg] =
    await Promise.all([
      prisma.booking.count({
        where: {
          assignment: {
            driverId,
          },
          scheduledAt: { gte: todayStart, lt: tomorrow },
          status: { in: ["CONFIRMED", "IN_PROGRESS"] },
        },
      }),
      prisma.booking.count({
        where: {
          assignment: {
            driverId,
          },
          updatedAt: { gte: todayStart },
          status: "COMPLETED",
        },
      }),
      prisma.booking.count({
        where: {
          assignment: {
            driverId,
          },
          scheduledAt: { gte: now },
          status: { in: ["CONFIRMED", "IN_PROGRESS"] },
        },
      }),
      prisma.payment.aggregate({
        _sum: { amountCents: true },
        where: {
          booking: {
            assignment: { driverId },
          },
          createdAt: { gte: todayStart, lt: tomorrow },
          status: "succeeded",
        },
      }),
    ]);

  const earningsUsd = (earningsAgg._sum.amountCents ?? 0) / 100;

  return [
    {
      id: "assignedToday",
      label: "Rides Assigned Today",
      value: assignedToday,
      href: "/driver",
    },
    {
      id: "completedToday",
      label: "Rides Completed Today",
      value: completedToday,
      href: "/driver",
    },
    {
      id: "upcoming",
      label: "Upcoming Rides",
      value: upcoming,
      href: "/driver",
    },
    {
      id: "earningsToday",
      label: "Earnings Today",
      value: `$${earningsUsd.toLocaleString()}`,
      href: "/driver",
    },
  ];
}
