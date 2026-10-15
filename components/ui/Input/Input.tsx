"use client";

import { useId, type ComponentProps } from "react";
import Field, { getFieldDescription, type FieldProps } from "@/components/ui/Field/Field";
import styles from "@/components/ui/Input/Input.module.scss";

type Props = Omit<ComponentProps<"input">, "type"> & FieldProps & {
  type?: "text" | "email" | "password" | "number" | "date" | "datetime-local" | "tel" | "url" | "search" | "time";
};

const Input = ({ id, label, hint, error, hideLabel, className, required, type = "text", "aria-describedby": description, ...props }: Props) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <Field id={inputId} label={label} hint={hint} error={error} hideLabel={hideLabel} required={required}>
      <input
        {...props}
        id={inputId}
        type={type}
        required={required}
        aria-invalid={error ? true : props["aria-invalid"]}
        aria-describedby={getFieldDescription(inputId, hint, error, description)}
        className={[styles.control, className].filter(Boolean).join(" ")}
      />
    </Field>
  );
};

export default Input;
