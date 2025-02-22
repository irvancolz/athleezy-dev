import { ComponentProps } from "react";
import styles from "./picture.module.css";

type PictureProps = {
  url: string;
  urlSm: string;
  objectFit?: "cover" | "contain";
  className?: string;
} & ComponentProps<"picture">;

export function Picture({ url, urlSm, className = "", ...rest }: PictureProps) {
  return (
    <picture {...rest} className={`${styles.container} ${className}`}>
      <source media="(min-width:768px)" srcSet={url} />
      <img src={urlSm} alt="" />
    </picture>
  );
}
