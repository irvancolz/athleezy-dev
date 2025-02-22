import image from "@public/main-marquee.jpg";
import styles from "./marquee.module.css";

export function MainMarquee() {
  return (
    <div className={styles.container}>
      <div className={styles.images_wrapper}>
        {Array.from({ length: 2 }).map((e, i) => {
          return <img key={i} src={image.src} />;
        })}
      </div>
    </div>
  );
}
