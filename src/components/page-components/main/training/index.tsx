import { Button, Picture, SectionWrapper, Text } from "@/components/primitives";
import styles from "./training.module.css";
import { SectionHeader } from "@/components/components";
import video from "@public/video.svg";
import img1 from "@public/training-and-development-1.png";
import img1Sm from "@public/training-and-development-1-sm.png";
import img2 from "@public/training-and-development-2.png";
import img2Sm from "@public/training-and-development-2-sm.png";
import img3 from "@public/training-and-development-3.png";
import img3Sm from "@public/training-and-development-3-sm.png";
import arrowRight from "@public/right-arrow.svg";

const playIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.2"
      d="M6.75 3.73876V20.2613C6.75245 20.3931 6.78962 20.522 6.85776 20.6349C6.9259 20.7478 7.0226 20.8407 7.13812 20.9043C7.25364 20.9679 7.38388 20.9999 7.51572 20.9972C7.64756 20.9944 7.77634 20.9569 7.88906 20.8884L21.3966 12.6272C21.5045 12.5619 21.5937 12.4699 21.6556 12.36C21.7175 12.2501 21.7501 12.1261 21.7501 12C21.7501 11.8739 21.7175 11.7499 21.6556 11.64C21.5937 11.5302 21.5045 11.4381 21.3966 11.3728L7.88906 3.11157C7.77634 3.04314 7.64756 3.00564 7.51572 3.00285C7.38388 3.00007 7.25364 3.03209 7.13812 3.0957C7.0226 3.1593 6.9259 3.25224 6.85776 3.36514C6.78962 3.47804 6.75245 3.60691 6.75 3.73876Z"
      fill="#212121"
    />
    <path
      d="M6.75 3.73876V20.2613C6.75245 20.3931 6.78962 20.522 6.85776 20.6349C6.9259 20.7478 7.0226 20.8407 7.13812 20.9043C7.25364 20.9679 7.38388 20.9999 7.51572 20.9972C7.64756 20.9944 7.77634 20.9569 7.88906 20.8884L21.3966 12.6272C21.5045 12.5619 21.5937 12.4699 21.6556 12.36C21.7175 12.2501 21.7501 12.1261 21.7501 12C21.7501 11.8739 21.7175 11.7499 21.6556 11.64C21.5937 11.5302 21.5045 11.4381 21.3966 11.3728L7.88906 3.11157C7.77634 3.04314 7.64756 3.00564 7.51572 3.00285C7.38388 3.00007 7.25364 3.03209 7.13812 3.0957C7.0226 3.1593 6.9259 3.25224 6.85776 3.36514C6.78962 3.47804 6.75245 3.60691 6.75 3.73876Z"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function MainTrainingAndDevelopment() {
  return (
    <SectionWrapper id="training" className={styles.container}>
      <div className={styles.header}>
        <SectionHeader
          align="center"
          icon={video.src}
          title="training & development"
          tagline="Your Future yours to Unlock"
        />
        <Text align="center">
          Learn, train, and grow to reach your full potential with dedication
          and consistent effort. Take on challenges, build new skills, and
          become the best version of yourself.
        </Text>
      </div>
      <div className={styles.content_container}>
        <div className={styles.card}>
          <Picture
            url={img1.src}
            urlSm={img1Sm.src}
            className={styles.main_banner}
          />
          <div className={styles.banner_body}>
            <h3 className={styles.banner_title}>
              The Perfect Street Soccer Dribble
            </h3>
            <Text color="dark">
              The Perfect Street Soccer Dribble is a smooth and creative move
              that helps you outsmart opponents in tight spaces. It combines
              quick footwork, close ball control, and clever tricks to keep
              defenders guessing.
            </Text>
          </div>
          <div className={styles.actions_container}>
            <Button variant="secondary">see details</Button>
            <Button variant="primary" leftIcon={playIcon}>
              watch the video
            </Button>
          </div>
        </div>
        <div className={styles.card}>
          {/* <div className={styles.img_wrapper}> */}
          <Picture
            className={styles.secondary_banner}
            url={img2.src}
            urlSm={img2Sm.src}
          />
          {/* </div> */}
        </div>
        <div className={styles.card}>
          {/* <div className={styles.img_wrapper}> */}
          <Picture
            className={styles.secondary_banner}
            url={img3.src}
            urlSm={img3Sm.src}
          />
          {/* </div> */}
        </div>
      </div>
      <Button rightIcon={<img src={arrowRight.src} alt="" />}>
        see more tutorial
      </Button>
    </SectionWrapper>
  );
}
