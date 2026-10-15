"use client";

import { useId, type ComponentProps } from "react";
import ChevronIcon from "@/components/ui/ChevronIcon/ChevronIcon";
import Field, { getFieldDescription, type FieldProps } from "@/components/ui/Field/Field";
import styles from "@/components/ui/Input/Input.module.scss";

type Props = ComponentProps<"select"> & FieldProps;

const Select = ({ id, label, hint, error, hideLabel, className, required, children, "aria-describedby": description, ...props }: Props) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <Field id={inputId} label={label} hint={hint} error={error} hideLabel={hideLabel} required={required}>
      <div className={styles["select-wrap"]}>
        <select
          {...props}
          id={inputId}
          required={required}
          aria-invalid={error ? true : props["aria-invalid"]}
          aria-describedby={getFieldDescription(inputId, hint, error, description)}
          className={[styles.control, styles.select, className].filter(Boolean).join(" ")}
        >
          {children}
        </select>
        <span className={styles["select-icon"]}><ChevronIcon /></span>
      </div>
    </Field>
  );
};

export default Select;
