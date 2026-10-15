"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import MenuIcon from "@/components/ui/MenuIcon/MenuIcon";
import Button from "@/components/ui/Button/Button";
import styles from "./Header.module.scss";

const HeaderMenu = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;

      setIsOpen(false);
      buttonRef.current?.focus();
    };

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!(event.target instanceof Node)) return;
      if (navRef.current?.contains(event.target)) return;
      if (buttonRef.current?.contains(event.target)) return;

      setIsOpen(false);
    };

    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setIsOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutsideClick);
    desktop.addEventListener("change", closeOnDesktop);

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [isOpen]);

  return (
    <>
      <Button
        ref={buttonRef}
        type="button"
        size="icon"
        className={styles["menu-toggle"]}
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={() => setIsOpen((open) => !open)}
      >
        <MenuIcon isOpen={isOpen} />
      </Button>
      <nav
        ref={navRef}
        id={menuId}
        aria-label="Primary navigation"
        className={`${styles.nav}${isOpen ? ` ${styles["is-open"]}` : ""}`}
        onClick={(event) => {
          if (event.target instanceof Element && event.target.closest("a")) {
            setIsOpen(false);
          }
        }}
      >
        {children}
      </nav>
    </>
  );
};

export default HeaderMenu;
