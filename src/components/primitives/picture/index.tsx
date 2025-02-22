import { ComponentProps } from "react";

type PictureProps = {
  url: string;
  urlSm: string;
  objectFit?: "cover" | "contain";
  className?: string;
} & ComponentProps<"picture">;

export function Picture({ url, urlSm, className = "", ...rest }: PictureProps) {
  return (
    <picture {...rest} className={`${className}`}>
      <source media="(min-width:768px)" srcSet={url} />
      <img src={urlSm} alt="" />
    </picture>
  );
}
