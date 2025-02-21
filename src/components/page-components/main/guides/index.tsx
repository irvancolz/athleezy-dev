import { Button, Chips, SectionWrapper, Text } from "@/components/primitives";
import styles from "./guides.module.css";
import { SectionHeader } from "@/components/components";
import guideIcon from "@public/book.svg";
import banner1 from "@public/guides-banner-1.png";
import banner2 from "@public/guides-banner-2.png";
import banner3 from "@public/guides-banner-3.png";
import banner4 from "@public/guides-banner-4.png";
import author1 from "@public/guides-author-1.png";
import author2 from "@public/guides-author-2.png";
import author3 from "@public/guides-author-3.png";
import author4 from "@public/guides-author-4.png";
import { StaticImageData } from "next/image";

const GUIDES_LIST: {
  price: number;
  title: string;
  description: string;
  author_name: string;
  author_title: string;
  banner: StaticImageData;
  author: StaticImageData;
  level: "all" | "beginner" | "intermediate";
}[] = [
  {
    price: 19.45,
    title: "Elite Fitness Plan for Peak Performance",
    description:
      "A 6-week workout plan designed to boost strength, endurance, and agility for athletes at any level.",
    banner: banner1,
    author: author1,
    author_name: "Laura Bennett",
    author_title: "Professional Coach",
    level: "beginner",
  },
  {
    price: 20.12,
    title: "Ultimate Meal Plan for Athletes",
    description:
      "A 4-week meal guide inspired by pro soccer players to fuel your body for peak performance.",
    banner: banner2,
    author: author2,
    author_name: "Sarah Lopez",
    author_title: "Nutrition",
    level: "all",
  },
  {
    price: 18.43,
    title: "Mastering Mental Toughness: A Guide for Athletes",
    description:
      "Learn how to stay focused and resilient on and off the field with proven mental training techniques.",
    banner: banner3,
    author: author3,
    author_name: "Dr. Emily Carter",
    author_title: "Sports Psychologist",
    level: "intermediate",
  },
  {
    price: 19.45,
    title: "Street Soccer Skills: Technical and Tactical Guide",
    description:
      "Step-by-step instructions to master the most effective street soccer moves and strategies.",
    banner: banner4,
    author: author4,
    author_name: "Anna Bella",
    author_title: "Professional Player",
    level: "intermediate",
  },
  {
    price: 19.45,
    title: "Street Soccer Skills: Technical and Tactical Guide",
    description:
      "Step-by-step instructions to master the most effective street soccer moves and strategies.",
    banner: banner4,
    author: author4,
    author_name: "Anna Bella",
    author_title: "Professional Player",
    level: "intermediate",
  },
  {
    price: 18.43,
    title: "Mastering Mental Toughness: A Guide for Athletes",
    description:
      "Learn how to stay focused and resilient on and off the field with proven mental training techniques.",
    banner: banner3,
    author: author3,
    author_name: "Dr. Emily Carter",
    author_title: "Sports Psychologist",
    level: "intermediate",
  },

  {
    price: 20.12,
    title: "Ultimate Meal Plan for Athletes",
    description:
      "A 4-week meal guide inspired by pro soccer players to fuel your body for peak performance.",
    banner: banner2,
    author: author2,
    author_name: "Sarah Lopez",
    author_title: "Nutrition",
    level: "all",
  },
  {
    price: 19.45,
    title: "Elite Fitness Plan for Peak Performance",
    description:
      "A 6-week workout plan designed to boost strength, endurance, and agility for athletes at any level.",
    banner: banner1,
    author: author1,
    author_name: "Laura Bennett",
    author_title: "Professional Coach",
    level: "beginner",
  },
];

export function MainGuides() {
  return (
    <SectionWrapper className={styles.container}>
      <div className={styles.header}>
        <SectionHeader
          icon={guideIcon.src}
          title="guides"
          tagline="Exclusive Digital Products"
        />
        <Text align="right" alignSm="center">
          Discover a range of digital resources designed to help you grow,
          learn, and achieve your goals—anytime, anywhere.
        </Text>
      </div>
      <ul className={styles.guides_container}>
        {GUIDES_LIST.map((guide, i) => {
          return (
            <li key={i} className={styles.guide}>
              <div className={styles.guide_banner}>
                <Chips className={styles.guide_level}>
                  {guide.level} level
                </Chips>
                <img
                  className={styles.guide_img}
                  src={guide.banner.src}
                  alt={guide.title}
                />
              </div>
              <div className={styles.guide_body}>
                <p className={styles.guide_price}>{guide.price}</p>
                <h3 className={styles.guide_title}>{guide.title}</h3>
                <Text alignSm="left" className={styles.guide_desc}>
                  {guide.description}
                </Text>
              </div>
              <div className={styles.author}>
                <img
                  src={guide.author.src}
                  className={styles.author_img}
                  alt={guide.author_name}
                />
                <div>
                  <p className={styles.author_name}>{guide.author_name}</p>
                  <Text alignSm="left" className={styles.author_title}>
                    {guide.author_title}
                  </Text>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <Button>See More Products</Button>
    </SectionWrapper>
  );
}
