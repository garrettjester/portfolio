import styles from "./Header.module.scss";
import Link from "next/link";
import Logo from "../logo";
import useMenuContext from "components/menu-drawer/useMenuContext";
import MenuIcon from "components/menu-drawer/MenuIcon";
import useModalContext from "components/contact-modal/useModalContext";
import Button from "components/button/Button";

export default function Header({
  style,
  shadowed,
  brandingBox,
  siteNav,
  rightContent,
}) {
  const { openMenu } = useMenuContext();
  const { openModal } = useModalContext();

  return (
    <div
      style={style}
      className={`${styles.headerContainer} ${shadowed ? styles.shadowed : ""}`}
    >
      <div className={styles.brandingBox}>
        <button onClick={openMenu} className={styles.menuButton}>
          <MenuIcon />
        </button>
        <Link href="/">
          <a style={{ paddingLeft: "10px" }}>
            <Logo />
          </a>
        </Link>
      </div>
      <div className={styles.centerContent}>{siteNav}</div>
      <div className={styles.rightContent}>
        <div style={{ marginLeft: "auto" }}></div>
        <Button onClick={openModal}>Contact</Button>
      </div>
    </div>
  );
}
