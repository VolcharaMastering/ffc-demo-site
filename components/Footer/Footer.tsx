import Image from "next/image";
import { LINKS } from "@/constants/links";
import styles from "./Footer.module.scss";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.inner}>
      <Image
        src="/logo.png"
        alt={LINKS.authorName}
        width={40}
        height={40}
        className={styles.logo}
      />
      <div className={styles.copyright}>
        © {new Date().getFullYear()} {LINKS.authorFullName} · {LINKS.authorName}
      </div>
      <div className={styles.links}>
        <a href={LINKS.repo} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={LINKS.npm} target="_blank" rel="noopener noreferrer">
          NPM
        </a>
        <a href={`mailto:${LINKS.authorEmail}`}>{LINKS.authorEmail}</a>
      </div>
      <div className={styles.license}>License: MIT</div>
    </div>
  </footer>
);

export default Footer;
