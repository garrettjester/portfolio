import styles from "./SocialStack.module.css";
import GithubIcon from "./GithubIcon";
import LinkedIcon from "./LinkedinIcon";

export default function SocialStack({fill}) {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <GithubIcon fill={fill} link="https://github.com/garrettjester"/>
      </div>
      <div className={styles.item}>
        <LinkedIcon fill={fill} link="https://www.linkedin.com/in/garrett-jester/"/>
      </div>
    </div>
  )
}