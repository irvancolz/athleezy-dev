import { CSSProperties, ReactNode } from "react";
import styles from "./section-title.module.css";

type TextAlign = "left" | "center" | "right";
type TextColor =
  | "white"
  | "dark"
  | "gray"
  | "gray-100"
  | "gray-200"
  | "gray-300"
  | "gray-400"
  | "gray-700"
  | "brown";

const TEXT_COLOR: Record<TextColor, string> = {
  white: "--col-white",
  dark: "--col-dark",
  gray: "--col-gray",
  "gray-100": "--col-gray-100",
  "gray-200": "--col-gray-200",
  "gray-300": "--col-gray-300",
  "gray-400": "--col-gray-400",
  "gray-700": "--col-gray-700",
  brown: "--col-brown",
};

export function SectionTitle({
  children,
  align = "left",
  alignSm = "center",
  color = "dark",
}: {
  children: ReactNode;
  align?: TextAlign;
  alignSm?: TextAlign;
  color?: TextColor;
}) {
  return (
    <h2
      className={styles.container}
      style={
        {
          "--textAlign-sm": alignSm,
          "--textAlign": align,
          "--col": `var(${TEXT_COLOR[color]})`,
        } as CSSProperties
      }
    >
      {children}
    </h2>
  );
}
