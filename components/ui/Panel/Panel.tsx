import type { ComponentProps, ReactNode } from "react";
import styles from "./Panel.module.scss";

type Props = ComponentProps<"section"> & {
  title?: string;
  actions?: ReactNode;
};

const Panel = ({ title, actions, children, className, ...props }: Props) => (
  <section {...props} className={[styles.panel, className].filter(Boolean).join(" ")}>
    {(title || actions) && (
      <div className={styles.header}>
        {title && <h2 className={styles.title}>{title}</h2>}
        {actions}
      </div>
    )}
    <div className={styles.body}>{children}</div>
  </section>
);

export default Panel;
