import type { ComponentProps } from "react";
import styles from "./Badge.module.scss";

type Props = ComponentProps<"span"> & {
  tone?: "neutral" | "accent" | "success" | "error" | "warning";
  dot?: boolean;
};

const Badge = ({ tone = "neutral", dot, children, className, ...props }: Props) => (
  <span {...props} className={[styles.badge, styles[tone], className].filter(Boolean).join(" ")}>
    {dot && <span className={styles.dot} aria-hidden="true" />}
    {children}
  </span>
);

export default Badge;
