"use client";

import type { ReactNode } from "react";
import Button from "@/components/ui/Button/Button";
import CloseIcon from "@/components/ui/CloseIcon/CloseIcon";
import styles from "./Toast.module.scss";

type Props = {
  children: ReactNode;
  tone?: "success" | "error";
  onClose: () => void;
};

const Toast = ({ children, tone = "success", onClose }: Props) => (
  <div className={[styles.toast, styles[tone]].join(" ")}>
    <div role={tone === "error" ? "alert" : "status"}>{children}</div>
    <Button size="icon" variant="ghost" aria-label="Dismiss notification" onClick={onClose}><CloseIcon /></Button>
  </div>
);

export default Toast;
