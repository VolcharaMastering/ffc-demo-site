"use client";

import { useId, type ChangeEventHandler, type ReactNode } from "react";
import { getFieldDescription } from "@/components/ui/Field/Field";
import fieldStyles from "@/components/ui/Field/Field.module.scss";
import styles from "@/components/ui/Field/Choice.module.scss";

type Props = {
  name: string;
  label: ReactNode;
  options: readonly { value: string; label: ReactNode; disabled?: boolean }[];
  value?: string;
  defaultValue?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  hint?: ReactNode;
  id?: string;
};

const RadioGroup = ({ name, label, options, value, defaultValue, onChange, required, disabled, error, hint, id }: Props) => {
  const generatedId = useId();
  const groupId = id ?? generatedId;

  return (
    <fieldset id={groupId} disabled={disabled} className={styles.group} aria-describedby={getFieldDescription(groupId, hint, error)} aria-invalid={error ? true : undefined}>
      <legend className={fieldStyles.label}>
        {label}{required && <span className={fieldStyles.required} aria-hidden="true"> *</span>}
      </legend>
      <div className={styles.options}>
        {options.map((option) => (
          <label key={option.value} className={styles.radio}>
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === undefined ? undefined : value === option.value}
              defaultChecked={value === undefined ? defaultValue === option.value : undefined}
              onChange={onChange}
              required={required}
              disabled={option.disabled}
            />
            {option.label}
          </label>
        ))}
      </div>
      {hint && <p id={`${groupId}-hint`} className={fieldStyles.hint}>{hint}</p>}
      {error && <p id={`${groupId}-error`} className={fieldStyles.error} aria-live="polite">{error}</p>}
    </fieldset>
  );
};

export default RadioGroup;
