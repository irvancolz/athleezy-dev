import { Button, SectionWrapper, Text } from "@/components/primitives";
import styles from "./testimonials.module.css";
import { SectionHeader } from "@/components/components";
import sparkle from "@public/sparkle.svg";
import avatar from "@public/testimonials-author-1.png";

const TESTIMONIALS_LIST = [
  {
    author: "Arda Guler",
    avatar,
    date: "Madrid, Spain - 2025",
    testimoni:
      "ATHLEEZY has completely changed the way I approach street soccer. The tutorials helped me sharpen my skills, and the community gave me a platform to share my passion. It’s not just a website, it’s a family!",
  },
  {
    author: "Arda Guler",
    avatar,
    date: "Madrid, Spain - 2025",
    testimoni:
      "ATHLEEZY completely transformed my game. The gear is top-notch, and the community inspires me to keep improving every day!",
  },
  {
    author: "Arda Guler",
    avatar,
    date: "Madrid, Spain - 2025",
    testimoni:
      "ATHLEEZY has completely changed the way I approach street soccer. The tutorials helped me sharpen my skills, and the community gave me a platform to share my passion. It’s not just a website, it’s a family!",
  },
  {
    author: "Arda Guler",
    avatar,
    date: "Madrid, Spain - 2025",
    testimoni:
      "ATHLEEZY completely transformed my game. The gear is top-notch, and the community inspires me to keep improving every day!",
  },
  {
    author: "Arda Guler",
    avatar,
    date: "Madrid, Spain - 2025",
    testimoni:
      "ATHLEEZY has completely changed the way I approach street soccer. The tutorials helped me sharpen my skills, and the community gave me a platform to share my passion. It’s not just a website, it’s a family!",
  },
  {
    author: "Arda Guler",
    avatar,
    date: "Madrid, Spain - 2025",
    testimoni:
      "ATHLEEZY completely transformed my game. The gear is top-notch, and the community inspires me to keep improving every day!",
  },
  {
    author: "Arda Guler",
    avatar,
    date: "Madrid, Spain - 2025",
    testimoni:
      "ATHLEEZY has completely changed the way I approach street soccer. The tutorials helped me sharpen my skills, and the community gave me a platform to share my passion. It’s not just a website, it’s a family!",
  },
  {
    author: "Arda Guler",
    avatar,
    date: "Madrid, Spain - 2025",
    testimoni:
      "ATHLEEZY completely transformed my game. The gear is top-notch, and the community inspires me to keep improving every day!",
  },
  {
    author: "Arda Guler",
    avatar,
    date: "Madrid, Spain - 2025",
    testimoni:
      "ATHLEEZY has completely changed the way I approach street soccer. The tutorials helped me sharpen my skills, and the community gave me a platform to share my passion. It’s not just a website, it’s a family!",
  },
  {
    author: "Arda Guler",
    avatar,
    date: "Madrid, Spain - 2025",
    testimoni:
      "ATHLEEZY completely transformed my game. The gear is top-notch, and the community inspires me to keep improving every day!",
  },
];

const FIRST_COLUMN_TESTIMONY = TESTIMONIALS_LIST.filter((e, i) => i % 3 == 0);
const SECOND_COLUMN_TESTIMONY = TESTIMONIALS_LIST.filter((e, i) => i % 3 == 1);
const THIRD_COLUMN_TESTIMONY = TESTIMONIALS_LIST.filter((e, i) => i % 3 == 2);

export function MainTestimonials() {
  return (
    <SectionWrapper className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <SectionHeader
            icon={sparkle.src}
            title="testimonial"
            tagline="What They’re Saying"
          />
          <Text align="right">
            Hear from players like you! Real stories, real experiences, and real
            love for the game.
          </Text>
        </div>
        <div className={styles.testimony_container_wrapper}>
          {[
            SECOND_COLUMN_TESTIMONY,
            FIRST_COLUMN_TESTIMONY,
            THIRD_COLUMN_TESTIMONY,
          ].map((col, i) => {
            return (
              <ul key={i} className={styles.testimony_container}>
                {col.map((testimony, j) => {
                  return (
                    <li key={j} className={styles.testimony}>
                      <Text color="dark" alignSm="left">
                        {testimony.testimoni}
                      </Text>
                      <div className={styles.author}>
                        <img
                          className={styles.testimony_avatar}
                          src={testimony.avatar.src}
                          alt={testimony.author}
                        />
                        <div>
                          <Text
                            color="dark"
                            alignSm="left"
                            className={styles.testimony_author}
                          >
                            {testimony.author}
                          </Text>
                          <Text
                            alignSm="left"
                            className={styles.testimony_date}
                          >
                            {testimony.date}
                          </Text>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
        <div className={styles.action_container}>
          <Button>see more testimony</Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
