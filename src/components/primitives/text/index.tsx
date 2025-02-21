import { CSSProperties, ReactNode } from "react";
import styles from "./text.module.css";

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

export function Text({
  children,
  align = "left",
  alignSm = "center",
  color = "gray-400",
  className = ""
}: {
  children: ReactNode;
  align?: TextAlign;
  alignSm?: TextAlign;
  color?: TextColor;
  className?: string
}) {
  return (
    <p
      className={`${styles.container} ${className}`}
      style={
        {
          "--textAlign-sm": alignSm,
          "--textAlign": align,
          "--col": `var(${TEXT_COLOR[color]})`,
        } as CSSProperties
      }
    >
      {children}
    </p>
  );
}
