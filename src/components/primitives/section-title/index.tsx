import { CSSProperties, ReactNode } from "react";
import styles from "./section-title.module.css";

type TextAlign = "left" | "center" | "right";

export function SectionTitle({
  children,
  align = "left",
  alignSm = "center",
}: {
  children: ReactNode;
  align?: TextAlign;
  alignSm?: TextAlign;
}) {
  return (
    <h2
      className={styles.container}
      style={
        {
          "--textAlign-sm": alignSm,
          "--textAlign": align,
        } as CSSProperties
      }
    >
      {children}
    </h2>
  );
}
