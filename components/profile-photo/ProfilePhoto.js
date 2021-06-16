import styles from "./ProfilePhoto.module.scss";
import Image from "next/dist/client/image";
import Fade from "react-reveal/Fade";

export default function ProfilePhoto() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.tile}></div>
      <Fade>
        <div className={styles.image}>
          <Image  className={styles.profile} src="/profile.png" layout="fill" priority/>
        </div>
      </Fade>
    </div>
  );
}
