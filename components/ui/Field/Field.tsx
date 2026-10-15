import type { ReactNode } from "react";
import styles from "@/components/ui/Field/Field.module.scss";

export type FieldProps = {
  label: ReactNode;
  error?: string;
  hint?: ReactNode;
  hideLabel?: boolean;
};

type Props = FieldProps & {
  id: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
};

export const getFieldDescription = (id: string, hint: ReactNode, error?: string, description?: string) =>
  [description, hint ? `${id}-hint` : undefined, error ? `${id}-error` : undefined]
    .filter(Boolean).join(" ") || undefined;

const Field = ({ id, label, error, hint, hideLabel, required, children, className }: Props) => (
  <div className={[styles.field, className].filter(Boolean).join(" ")}>
    <label htmlFor={id} className={hideLabel ? styles["hidden-label"] : styles.label}>
      {label}{required && <span className={styles.required} aria-hidden="true"> *</span>}
    </label>
    {children}
    {hint && <span id={`${id}-hint`} className={styles.hint}>{hint}</span>}
    {error && <span id={`${id}-error`} className={styles.error} aria-live="polite">{error}</span>}
  </div>
);

export default Field;
