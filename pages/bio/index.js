import SEOHead from "components/SEOHead";
import Scaffold from "../../components/scaffold";
import Fade from "react-reveal/Fade";
import Button from "../../components/button";

export default function Bio() {
  return (
    <div className="fullTile">
       <SEOHead
        title={"Bio | Garrett Jester"}
        description="A bit about my background."
      />
      <Scaffold>
        <div className="container">
          <Fade bottom>
            <h4>My story</h4>
            <p>
              I grew up in a small Philadelphia suburb (<a href="https://en.wikipedia.org/wiki/Landenberg,_Pennsylvania">Landenberg, PA</a>). 
              I spent most of my spare time in the outdoors as a kid, away from electronics. 
            </p>
            <p>
              In high school, I learned Photoshop and taught myself to code. I quickly found a knack for
              visualizing and building interfaces from scratch. Fascinated by the impact that mobile apps 
              were having on the social lives of my generation, I founded my first company, <a href="https://www.wrlds.io">WRLDS</a>, 
              alongside two veteran engineers when I was 18.
            </p>
            <p>
              I attended Cornell University 🐻. After graduating in 2020 with a
              B.A. in Economics, I took a gap year to focus on WRLDS and other
              side projects. I launched <a href="https://www.khyber.io">Khyber Labs</a> in April of 2021.
            </p>

            <p>In my 6+ years working in digital product development, I've been fortunate to wear many hats. 
              I care immensely about the look and feel of the products I build, but I also know the technical
              and business constraints under which all successful product teams must operate.
            </p>
            <p>My long-term interests are in:</p>
            <ul>
              <li>democratizing creative freedom and access to information</li>
              <li>encouraging users be more present in the real world</li>
              <li>preserving our pale blue dot</li>
            </ul>
            <p>
              I'm a Star Wars and Game of Thrones fanatic. I've spent time working internationally 
              (in both Medellin, Colombia and Mexico City) but somehow always return to NYC :).
            </p>
            <div style={{paddingTop: '30px'}}>
              {/** Add resume download link here. */}
              <a target="_blank" href={process.env.NEXT_PUBLIC_RESUME_URL}>
                <Button>Download CV</Button>
              </a>
            </div>
          </Fade>
        </div>
      </Scaffold>
      </div>
  
  );
}
