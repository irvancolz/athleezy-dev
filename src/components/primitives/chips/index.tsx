import { ReactNode } from "react";
import styles from "./chips.module.css";

type ChipsProps = {
  children: ReactNode;
  icon?: string;
  className?: string;
};

export function Chips({ children, icon, className = "" }: ChipsProps) {
  return (
    <div className={`${styles.container} ${className}`}>
      {/* eslint-disable-next-line */}
      {icon && <img className={styles.icon} src={icon} alt="" />}
      {children}
    </div>
  );
}
