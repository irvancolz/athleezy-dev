import { ComponentProps, ReactNode } from "react";
import styles from "./section-wrapper.module.css";

export function SectionWrapper({
  children,
  className = "",
  ...rest
}: {
  children: ReactNode;
  className?: string;
} & ComponentProps<"section">) {
  return (
    <section className={`${styles.container} ${className}`} {...rest}>
      {children}
    </section>
  );
}
