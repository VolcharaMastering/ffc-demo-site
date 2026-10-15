import type { ReactNode } from "react";
import styles from "./Notice.module.scss";

type Props = {
  children: ReactNode;
  title?: string;
  tone?: "info" | "success" | "warning" | "error";
};

const Notice = ({ children, title, tone = "info" }: Props) => (
  <div className={[styles.notice, styles[tone]].join(" ")} role={tone === "error" ? "alert" : "status"}>
    {title && <p className={styles.title}>{title}</p>}
    <div className={styles.content}>{children}</div>
  </div>
);

export default Notice;
