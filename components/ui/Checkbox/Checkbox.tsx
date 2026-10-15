"use client";

import { useId, type ComponentProps } from "react";
import { getFieldDescription, type FieldProps } from "@/components/ui/Field/Field";
import fieldStyles from "@/components/ui/Field/Field.module.scss";
import styles from "@/components/ui/Field/Choice.module.scss";

type Props = Omit<ComponentProps<"input">, "type"> & Omit<FieldProps, "hideLabel">;

const Checkbox = ({ id, label, hint, error, className, required, "aria-describedby": description, ...props }: Props) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <div className={fieldStyles.field}>
      <label className={styles.checkbox} htmlFor={inputId}>
        <input
          {...props}
          id={inputId}
          type="checkbox"
          required={required}
          aria-invalid={error ? true : props["aria-invalid"]}
          aria-describedby={getFieldDescription(inputId, hint, error, description)}
          className={className}
        />
        <span>{label}{required && <span className={fieldStyles.required} aria-hidden="true"> *</span>}</span>
      </label>
      {hint && <span id={`${inputId}-hint`} className={fieldStyles.hint}>{hint}</span>}
      {error && <span id={`${inputId}-error`} className={fieldStyles.error} aria-live="polite">{error}</span>}
    </div>
  );
};

export default Checkbox;
