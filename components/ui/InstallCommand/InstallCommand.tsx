import CopyButton from "@/components/ui/CopyButton/CopyButton";
import styles from "./InstallCommand.module.scss";

const InstallCommand = ({ command }: { command: string }) => (
  <div className={styles.command}>
    <code className={styles.code} tabIndex={0}>{command}</code>
    <CopyButton text={command} />
  </div>
);

export default InstallCommand;
