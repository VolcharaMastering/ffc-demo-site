"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button/Button";

type Props = { text: string; label?: string };

const CopyButton = ({ text, label = "Copy" }: Props) => {
  const [status, setStatus] = useState<"idle" | "copying" | "copied" | "error">("idle");

  useEffect(() => {
    if (status !== "copied" && status !== "error") return;
    const timer = window.setTimeout(() => setStatus("idle"), 2500);
    return () => window.clearTimeout(timer);
  }, [status]);

  const copy = async () => {
    setStatus("copying");
    try {
      await navigator.clipboard.writeText(text);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
  };

  return (
    <Button size="sm" onClick={copy} disabled={status === "copying"}>
      <span aria-live="polite">
        {status === "copied" ? "Copied!" : status === "error" ? "Copy failed. Retry" : label}
      </span>
    </Button>
  );
};

export default CopyButton;
