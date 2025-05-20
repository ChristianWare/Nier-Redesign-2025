import styles from "./BlogFilter.module.css";

const data = [
  {
    id: 1,
    title: "Latest Articles",
  },
  {
    id: 2,
    title: "Travel",
  },
  {
    id: 3,
    title: "Culture",
  },
  {
    id: 4,
    title: "Vehicles",
  },
  {
    id: 5,
    title: "Events",
  },
];

export default function BlogFilter() {
  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {data.map((x) => (
          <li className={styles.title} key={x.id}>
            {x.title}
          </li>
        ))}
      </ul>
    </section>
  );
}
