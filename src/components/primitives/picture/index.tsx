import { ComponentProps } from "react";
import styles from "./picture.module.css";

type PictureProps = {
  url: string;
  urlSm: string;
  objectFti: "cover" | "contain";
} & ComponentProps<"picture">;

export function Picture({ url, urlSm, ...rest }: PictureProps) {
  return (
    <picture {...rest} className={styles.container}>
      <source media="min-width:768px" srcSet={url} />
      <img src={urlSm} alt="" />
    </picture>
  );
}
