import Fade from "react-reveal/Fade";
import SEOHead from "components/SEOHead";
import Scaffold from "../../components/scaffold";
import Image from "next/image";
import Grid from "@material-ui/core/Grid";
import styles from "./Writing.module.scss";

function Writing({ articles }) {
  const loader = ({ src }) => {
    return src;
  };

  // DISPLAY ARTICLES IN GRID
  const renderArticles = () => {
    return articles.map((article) => {
      return (
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <a href={article.link} target="_blank">
            <div className={styles.articleCard}>
              <div className={styles.thumbnail}>
                <Image
                  className={styles.image}
                  src={article.thumbnail}
                  loader={loader}
                  layout="fill"
                />
              </div>
              <a>{article.title}</a>
            </div>
          </a>
        </Grid>
      );
    });
  };

  return (
    <div className="fullTile">
       <SEOHead
        title={"Writing | Garrett Jester"}
        description="Articles I've written about tech, entrepreneurship, or project management."
      />
      <Scaffold>
        <div className="container">
          <Fade bottom>
            <h4>Recent Writing</h4>
            <p>
              Most of my articles cover technologies that I'm currently
              using/learning. I use them as 'how-to' guides for me and my teams.
              I'm also a staff writer for{" "}
              <a href="https://towardsaws.com/">Towards AWS</a> if you're
              interested in serverless infrastructure.{" "}
            </p>
         
          <Grid
            style={{ paddingTop: "40px", marginBottom: "40px" }}
            container
            spacing={4}
          >
            {renderArticles()}
          </Grid>
        </Fade>
        </div>
      </Scaffold>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@garrett-jester"
  );
  const { items } = await res.json();

  return {
    props: {
      articles: items,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}

export default Writing;
