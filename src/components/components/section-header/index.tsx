import { Chips, SectionTitle } from "@/components/primitives";
import styles from "./section-header.module.css";
import { CSSProperties } from "react";

type Alignment = "left" | "center" | "right";

type SectionHeaderProps = {
  icon?: string;
  title?: string;
  tagline?: string;
  align?: Alignment;
  alignSm?: Alignment;
};

const ALIGNMENT: Record<Alignment, string> = {
  center: "center",
  left: "flex-start",
  right: "flex-end",
};

export function SectionHeader({
  icon,
  title,
  tagline,
  align = "left",
  alignSm = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={styles.container}
      style={
        {
          "--align": ALIGNMENT[align],
          "--align-sm": ALIGNMENT[alignSm],
        } as CSSProperties
      }
    >
      <Chips icon={icon}>{title}</Chips>
      <SectionTitle>{tagline}</SectionTitle>
    </div>
  );
}
