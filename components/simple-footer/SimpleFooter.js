import Scaffold from "../scaffold";
import styles from "./SimpleFooter.module.scss";

export default function SimpleFooter({ copyright }) {
  const renderCopyright = () => {
    return copyright ? <p>{`© ${copyright}`}</p> : null;
  };

  return (
    <div className={styles.footer}>
      <div></div>
      <div>{renderCopyright()}</div>
      <div></div>
    </div>
  );
}
