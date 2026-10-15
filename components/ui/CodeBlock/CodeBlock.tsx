import CopyButton from "@/components/ui/CopyButton/CopyButton";
import styles from "./CodeBlock.module.scss";

type Props = {
  code: string;
  title?: string;
  language?: string;
  copyable?: boolean;
  wrap?: boolean;
};

const CodeBlock = ({ code, title, language = "text", copyable = true, wrap = false }: Props) => (
  <div className={styles.block}>
    <div className={styles.header}>
      <span className={styles.title}>{title ?? language}</span>
      {copyable && <CopyButton text={code} label="Copy all" />}
    </div>
    <pre className={[styles.code, wrap && styles.wrap].filter(Boolean).join(" ")} tabIndex={0} aria-label={title ?? `${language} code`}>
      <code>{code}</code>
    </pre>
  </div>
);

export default CodeBlock;
