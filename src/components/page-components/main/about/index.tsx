import {
  Button,
  Chips,
  Picture,
  SectionTitle,
  SectionWrapper,
  Text,
} from "@/components/primitives";
import styles from "./about.module.css";
import rocket from "@public/rocket-launch.svg";
import playIcon from "@public/play.svg";
import banner from "@public/about-banner.png";
import bannerSm from "@public/about-banner-sm.png";
import { AboutProducts } from "@/components/components";

export function MainAbout() {
  return (
    <SectionWrapper id="community" className={styles.container}>
      <div className={styles.video_content}>
        <div className={styles.header}>
          <Chips icon={rocket.src}>about us</Chips>
          <SectionTitle align="right">
            Building community, inspiring culture, empowering.
          </SectionTitle>
        </div>
        <div className={styles.video_wrapper}>
          <Picture
            className={styles.video}
            url={banner.src}
            urlSm={bannerSm.src}
          />
          <Button
            variant="secondary"
            leftIcon={<img src={playIcon.src} alt="" />}
          >
            watch the video
          </Button>
        </div>
        <Text color="dark" alignSm="left">
          Our platform connects players and fans through tutorials, events, and
          exclusive merchandise. Whether you want to learn, share your talent,
          or simply enjoy the game, ATHLEEZY is here to inspire and empower the
          street soccer community.
        </Text>
      </div>
      <div>
        <AboutProducts />
      </div>
    </SectionWrapper>
  );
}
