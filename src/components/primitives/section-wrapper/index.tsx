import { ReactNode } from "react";
import styles from "./section-wrapper.module.css";

export function SectionWrapper({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`${styles.container} ${className}`}>{children}</section>
  );
}
