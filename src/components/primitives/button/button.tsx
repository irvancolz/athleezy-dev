import { ComponentProps, ReactElement } from "react";
import styles from "./button.module.css";

type ButtonVariant = "primary" | "secondary" | "ternary";

type ButtonProps = {
  leftIcon?: ReactElement | null;
  rightIcon?: ReactElement | null;
  variant?: ButtonVariant;
} & ComponentProps<"button">;

export function Button({
  children,
  variant = "primary",
  leftIcon,
  rightIcon,
  ...rest
}: ButtonProps) {
  return (
    <button className={styles.container} {...rest} data-variant={variant}>
      <span className={styles.icon}>{leftIcon}</span>
      {children}
      <span className={styles.icon}>{rightIcon}</span>
    </button>
  );
}
