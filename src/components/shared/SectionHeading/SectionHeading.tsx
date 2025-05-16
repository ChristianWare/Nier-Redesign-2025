import styles from "./SectionHeading.module.css";

interface Props {
  title: string;
}

export default function SectionHeading({ title }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
    </div>
  );
}
