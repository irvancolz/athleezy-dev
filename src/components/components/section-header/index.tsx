import { Chips, SectionTitle } from "@/components/primitives";
import styles from "./section-header.module.css";

type SectionHeaderProps = {
  icon?: string;
  title?: string;
  tagline?: string;
};

export function SectionHeader({ icon, title, tagline }: SectionHeaderProps) {
  return (
    <div className={styles.container}>
      <Chips icon={icon}>{title}</Chips>
      <SectionTitle>{tagline}</SectionTitle>
    </div>
  );
}
