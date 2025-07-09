"use client";

import styles from "./ServiceDetails.module.css";
import { useParams } from "next/navigation";
import Link from "next/link";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import { projects } from "@/data";
import Faq from "@/components/shared/Faq/Faq";

export default function ServiceDetailsPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <LayoutWrapper>
        <div className={styles.container}>
          <h1>Service not found</h1>
          <Link href='/projects'>Back to services</Link>
        </div>
      </LayoutWrapper>
    );
  }

  return (
    <main>
      <h1>Slug details page</h1>
      <Faq />
    </main>
  );
}
