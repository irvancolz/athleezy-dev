import { ReactNode } from "react";
import styles from "./chips.module.css";

type ChipsProps = {
  children: ReactNode;
  icon?: string;
};

export function Chips({ children, icon }: ChipsProps) {
  return (
    <div className={styles.container}>
      {/* eslint-disable-next-line */}
      {icon && <img src={icon} alt="" />}
      {children}
    </div>
  );
}
