"use client";

import { useId, type ComponentProps } from "react";
import Field, { getFieldDescription, type FieldProps } from "@/components/ui/Field/Field";
import styles from "@/components/ui/Input/Input.module.scss";

type Props = ComponentProps<"textarea"> & FieldProps;

const Textarea = ({ id, label, hint, error, hideLabel, className, required, rows = 3, "aria-describedby": description, ...props }: Props) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <Field id={inputId} label={label} hint={hint} error={error} hideLabel={hideLabel} required={required}>
      <textarea
        {...props}
        id={inputId}
        rows={rows}
        required={required}
        aria-invalid={error ? true : props["aria-invalid"]}
        aria-describedby={getFieldDescription(inputId, hint, error, description)}
        className={[styles.control, styles.textarea, className].filter(Boolean).join(" ")}
      />
    </Field>
  );
};

export default Textarea;
