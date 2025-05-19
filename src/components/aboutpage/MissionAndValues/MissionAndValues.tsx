import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./MissionAndValues.module.css";

const data = [
  {
    id: 1,
    title: "Safety First",
    description:
      "Chauffeurs complete Smith-System defensive-driving, DOT physicals, and random drug screens. Every vehicle passes a multi-point inspection before each shift.",
  },
  {
    id: 2,
    title: "Punctuality Guaranteed",
    description:
      "We track flights, traffic, and weather in real time. If we’re more than 15 minutes late, your first hour is free.",
  },
  {
    id: 3,
    title: "Discretion & Respect",
    description:
      "Unbranded vehicles, NDA-trained drivers, and strict data-protection policies keep high-profile travel completely private.",
  },
  {
    id: 4,
    title: "Desert Hospitality",
    description:
      "Complimentary bottled water, phone chargers, chilled towels in summer, and a warm Arizona welcome on every ride.",
  },
  {
    id: 5,
    title: "Environmental Stewardship",
    description:
      "We offset 100 % of fleet emissions through Terrapass® and prioritise low-emission vehicles whenever possible.",
  },
  {
    id: 6,
    title: "Local Expertise",
    description:
      "Native Arizonan chauffeurs know alternate routes, seasonal traffic patterns, and hidden-gem drop-offs for a smoother journey.",
  },
  {
    id: 7,
    title: "White-Glove Comfort",
    description:
      "Freshly detailed interiors, soothing cabin scents, and on-board Wi-Fi ensure every mile feels first-class.",
  },
  {
    id: 8,
    title: "Transparency",
    description:
      "Flat-rate pricing with all fees disclosed upfront—no surge, fuel, or surprise wait-time add-ons.",
  },
  {
    id: 9,
    title: "Continuous Improvement",
    description:
      "Quarterly driver audits, post-ride NPS surveys, and ongoing training keep our service quality climbing year after year.",
  },
] as const;

export default function MissionAndValues() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={styles.heading}>Mission & Values</h2>
          </div>
          <div className={styles.bottom}>
            {data.map((x) => (
              <div className={styles.card} key={x.id}>
                <h3 className={styles.title}>{x.title}</h3>
                <p className={styles.description}>
                    {x.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
