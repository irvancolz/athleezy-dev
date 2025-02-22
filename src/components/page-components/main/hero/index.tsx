import { Button, Picture, Text } from "@/components/primitives";
import styles from "./hero.module.css";
import banner from "@public/home-hero.png";
import bannerSm from "@public/home-hero-sm.png";
import { Topnav } from "@/components/ui";

const CONTRIBUTIONS_LIST = [
  {
    label: "community",
    value: "830",
  },
  {
    label: "events",
    value: "451",
  },
  {
    label: "tutorials",
    value: "250",
  },
];

export function Hero() {
  return (
    <section className={styles.container}>
      <Topnav className={styles.topnav} />
      <Picture
        className={styles.background_img}
        url={banner.src}
        urlSm={bannerSm.src}
      />
      <div className={styles.content}>
        <h1 className={styles.title}>
          by <span>players</span>, for <span>players</span>
        </h1>
        <div className={styles.description_container}>
          <Text color="white" alignSm="left" className={styles.description}>
            Play, learn, and belong in a community built by players, for
            players. It&apos;s all about sharing passion, improving skills, and
            growing together.
          </Text>
          <ul className={styles.contribution_container}>
            {CONTRIBUTIONS_LIST.map((el, i) => {
              return (
                <li key={i} className={styles.contribution}>
                  <span className={styles.contribution_count}>{el.value}</span>
                  <span className={styles.contribution_label}>{el.label}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <Button variant="secondary">get started</Button>
      </div>
    </section>
  );
}
