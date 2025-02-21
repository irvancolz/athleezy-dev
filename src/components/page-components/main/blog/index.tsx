import { Button, SectionWrapper, Text } from "@/components/primitives";
import styles from "./blog.module.css";
import { SectionHeader } from "@/components/components";
import img from "@public/article.svg";
import blogBanner from "@public/blog-banner-1.png";

const blog = {
  img: blogBanner,
  title: "Mastering the Art of Street Soccer: 5 Essential Drills",
  description:
    "Take your street soccer skills to the next level with these must-know drills. Learn techniques to improve your control, speed, and creativity on the court.",
};

const BLOGS = Array.from({ length: 6 }).map(() => blog);

export function MainBlog() {
  return (
    <SectionWrapper className={styles.container}>
      <div className={styles.header}>
        <SectionHeader
          title="blog"
          icon={img.src}
          tagline="Game Changers, Insights and Stories"
          align="center"
        />
        <Text color="gray-400" align="center" alignSm="center">
          Explore the world of street soccer with tips, tutorials, and inspiring
          stories. Stay updated on the latest trends, skills, and culture
          shaping the game.
        </Text>
      </div>
      <ul className={styles.blog_container}>
        {BLOGS.map((blog, i) => {
          return (
            <li className={styles.blog} key={i}>
              <img
                className={styles.blog_img}
                src={blog.img.src}
                alt={blog.title}
              />
              <div>
                <h3 className={styles.blog_title}>{blog.title}</h3>
                <Text
                  className={styles.blog_description}
                  align="left"
                  alignSm="left"
                >
                  {blog.description}
                </Text>
              </div>
            </li>
          );
        })}
      </ul>
      <Button>See More Articles</Button>
    </SectionWrapper>
  );
}
