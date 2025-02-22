import { SectionTitle, Text } from "@/components/primitives";
import styles from "./style.module.css";
import soccerBall from "@public/soccer-ball.svg";
import sparkle from "@public/sparkle.svg";
import group from "@public/group.svg";

const CONTENT_LIST = [
  {
    icon: soccerBall,
    title: "Built for Players, by Players",
    description:
      "We understand street soccer because we live it. ATHLEEZY is crafted by players who share your passion, creating a platform that truly represents the game and its culture.",
  },
  {
    icon: sparkle,
    title: "Celebrate Culture, Grow Talent",
    description:
      "From showcasing street soccer skills to providing resources for personal growth, we’re here to inspire, educate, and celebrate the creativity that defines urban soccer.",
  },
  {
    icon: group,
    title: "Community at the Core",
    description:
      "At ATHLEEZY, you’re never alone. Connect with like-minded players and fans, join events, and be part of a thriving community that shares your love for the game.",
  },
];

export function AboutProducts() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <SectionTitle color="white">
          What Makes ATHLEEZY the Heart of Street Soccer
        </SectionTitle>
        <Text color="gray-300" align="right">
          ATHLEEZY is the soul of street soccer, blending style, passion, and
          skill. It&apos;s more than a brand—it&apos;s a movement that inspires
          creativity and unites the soccer community.
        </Text>
      </div>
      <ul className={styles.content_container}>
        {CONTENT_LIST.map((content, i) => {
          return (
            <li key={i} className={styles.content}>
              <div className={styles.content_header}>
                <div className={styles.content_icon}>
                  <img src={content.icon.src} alt={content.title} />
                </div>
                <h3 className={styles.content_title}>{content.title}</h3>
              </div>

              <Text color="gray-300">{content.description}</Text>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
