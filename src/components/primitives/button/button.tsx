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
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`${styles.container} ${className}`}
      {...rest}
      data-variant={variant}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
}
