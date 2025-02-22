import { Dropdown, SectionWrapper, Text } from "@/components/primitives";
import styles from "./faq.module.css";
import { SectionHeader } from "@/components/components";
import faqIcon from "@public/question.svg";
import img from "@public/faq-banner.png";

const QUESTION_LIST = [
  {
    label: "What is ATHLEEZY?",
    description:
      "ATHLEEZY is a community-driven platform dedicated to street soccer. We aim to promote street soccer culture, provide educational resources, and connect players worldwide while offering exclusive merchandise and tools for talent development.",
  },
  {
    label: "Who is ATHLEEZY for?",
    description:
      "ATHLEEZY is a community-driven platform dedicated to street soccer. We aim to promote street soccer culture, provide educational resources, and connect players worldwide while offering exclusive merchandise and tools for talent development.",
  },
  {
    label: "What kind of community features does ATHLEEZY offer?",
    description:
      "ATHLEEZY is a community-driven platform dedicated to street soccer. We aim to promote street soccer culture, provide educational resources, and connect players worldwide while offering exclusive merchandise and tools for talent development.",
  },
  {
    label: "How can I create a player profile?",
    description:
      "ATHLEEZY is a community-driven platform dedicated to street soccer. We aim to promote street soccer culture, provide educational resources, and connect players worldwide while offering exclusive merchandise and tools for talent development.",
  },
  {
    label: "Will there be training resources available?",
    description:
      "ATHLEEZY is a community-driven platform dedicated to street soccer. We aim to promote street soccer culture, provide educational resources, and connect players worldwide while offering exclusive merchandise and tools for talent development.",
  },
];

export function MainFAQ() {
  return (
    <SectionWrapper className={styles.container}>
      <div>
        <SectionHeader
          icon={faqIcon.src}
          title="FAQ"
          tagline="Frequently Asked Questions"
        />
        <Text className={styles.description}>
          Still curious? Feel free to contact us - your questions are always
          welcome, and we&apos;re eager to help!
        </Text>
        <img className={styles.banner} src={img.src} alt="faq banner" />
      </div>
      <div className={styles.question_container}>
        {QUESTION_LIST.map((question, i) => {
          return (
            <Dropdown title={question.label} key={i}>
              <Text>{question.description}</Text>
            </Dropdown>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
