"use client";
import styles from "./dropdown.module.css";
import openIcon from "@public/plus-circle.svg";
import closeIcon from "@public/minus-circle.svg";
import { CSSProperties, ReactNode, useRef, useState } from "react";
import { Button } from "../button";

type DropdownProps = {
  title: string;
  children?: ReactNode;
};

export function Dropdown({ title, children }: DropdownProps) {
  const [opened, setOpened] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement>(null);

  function toggle() {
    setOpened((prev) => !prev);
  }

  return (
    <div className={styles.container}>
      <Button className={styles.header} onClick={toggle} variant="ternary">
        <span className={styles.title}>{title}</span>
        <img src={opened ? closeIcon.src : openIcon.src} alt="" />
      </Button>
      <div
        className={styles.content_container}
        data-expanded={opened}
        style={
          {
            "--mah": contentRef.current?.getBoundingClientRect().height + "px",
          } as CSSProperties
        }
      >
        <div ref={contentRef}>{children}</div>
      </div>
    </div>
  );
}
