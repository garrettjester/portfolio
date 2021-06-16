import Head from "next/head";
import styles from "styles/Home.module.scss"
import DuoTile from "../components/duo-tile";
import Fade from "react-reveal/Fade";
import ProfilePhoto from "../components/profile-photo";
import SocialStack from "../components/social-stack";
import Button from "../components/button";
import Div100vh from "node_modules/react-div-100vh";
import useModalContext from "components/contact-modal/useModalContext";


export default function Home() {

  const {openModal} = useModalContext()

  return (
    <div>
      <Head>
        <title>Garrett Jester</title>
        <meta
          name="description"
          content="I build cool products from scratch."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Div100vh style={{minHeight: '600px', paddingTop: '60px'}}>
      <DuoTile>
          <div className={styles.textContainer}>
            <div>
              <Fade bottom>
                <h1>Hi, I'm Garrett!</h1>

                <p style={{ color: "gray" }}>
                  I help teams build innovative software products from 'Hello
                  World' to release.
                </p>
                <SocialStack
                  fill="#CDCDCD"
                  links={{
                    github: "https://github.com/garrettjester",
                    linkedin: "https://www.linkedin.com/in/garrett-jester/",
                  }}
                />
              </Fade>
              <div className={styles.actionContainer}>
                <div className={styles.action}>
                  <a href="https://jgj-portfolio.s3.amazonaws.com/Garrett_Jester.pdf" target="_blank">
                  <Button type="secondary">Download CV</Button>
                  </a>
                </div>
                <div className={styles.action}>
                  <Button onClick={openModal}>Let's Build Something</Button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.imageContainer}
          >
            <ProfilePhoto />
          </div>
        </DuoTile>
      </Div100vh>
    </div>
  );
}
