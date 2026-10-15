import Link from "next/link";
import type { ComponentProps } from "react";
import styles from "./Button.module.scss";

type ButtonStyleProps = {
  variant?: "outline" | "primary" | "success" | "ghost";
  size?: "sm" | "md" | "icon";
  selected?: boolean;
  pill?: boolean;
  className?: string;
};

const getClassName = ({
  variant = "outline",
  size = "md",
  selected,
  pill,
  className,
}: ButtonStyleProps) => [
  styles.button,
  styles[variant],
  styles[size],
  selected && styles.selected,
  pill && styles.pill,
  className,
].filter(Boolean).join(" ");

type ButtonProps = ComponentProps<"button"> & ButtonStyleProps;

const Button = ({ variant, size, selected, pill, className, type = "button", ...props }: ButtonProps) => (
  <button
    type={type}
    aria-pressed={selected}
    {...props}
    className={getClassName({ variant, size, selected, pill, className })}
  />
);

type ButtonLinkProps = ComponentProps<typeof Link> & Omit<ButtonStyleProps, "selected">;

export const ButtonLink = ({ variant, size, pill, className, ...props }: ButtonLinkProps) => (
  <Link {...props} className={getClassName({ variant, size, pill, className })} />
);

export default Button;
