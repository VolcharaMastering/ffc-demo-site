import Link from "next/link";
import LogoMark from "@/components/ui/LogoMark/LogoMark";
import Badge from "@/components/ui/Badge/Badge";
import { ButtonLink } from "@/components/ui/Button/Button";
import { LINKS } from "@/constants/links";
import HeaderMenu from "./HeaderMenu";
import LanguageMenu from "./LanguageMenu";
import styles from "./Header.module.scss";

const Header = () => (
  <header className={styles.header}>
    <div className={styles.inner}>
      <Link href="/" className={styles.logo}>
        <LogoMark className={styles["logo-mark"]} />
        <span className={styles["logo-text"]}>full-form-control</span>
      </Link>
      <HeaderMenu>
        <ButtonLink href={LINKS.repo} target="_blank" rel="noopener noreferrer" className={styles.link}>
          GitHub
        </ButtonLink>
        <ButtonLink href={LINKS.npm} target="_blank" rel="noopener noreferrer" className={styles.link}>
          NPM
        </ButtonLink>
        <Badge className={styles.badge}>
          <span className={styles["badge-dot"]} aria-hidden="true" />
          MIT · React 18+ · zero dependencies
        </Badge>
        <LanguageMenu />
        <ButtonLink href={LINKS.docs} className={styles.docs}>
          <span className={styles["docs-icon"]}>⌘</span>
          Docs
        </ButtonLink>
      </HeaderMenu>
    </div>
  </header>
);

export default Header;
