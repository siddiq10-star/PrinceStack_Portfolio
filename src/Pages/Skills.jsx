import meter1 from "../assets/meter1.svg";
import meter2 from "../assets/meter2.svg";
import meter3 from "../assets/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/arrow1.svg";
import arrow2 from "../assets/arrow2.svg";
import "../stylesheets/Skills.css";

export const Skills = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, 
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const CustomLeftArrow = ({ onClick }) => (
    <button className="custom-arrow left" onClick={onClick}>
      <img src={arrow1} alt="left" />
    </button>
  );

  const CustomRightArrow = ({ onClick }) => (
    <button className="custom-arrow right" onClick={onClick}>
      <img src={arrow2} alt="right" />
    </button>
  );

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2 className="text-bold">Skills</h2>
              <p>
                With expertise in the MERN stack, I build full-featured web
                applications from scratch. I focus on writing clean code,
                creating engaging user interfaces, and ensuring seamless
                performance from front to back.
              </p>
              <div className="skill-carousel-wrapper">
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  customLeftArrow={<CustomLeftArrow />}
                  customRightArrow={<CustomRightArrow />}
                  className="skill-slider"
                >
                  <div className="item">
                    <img src={meter1} alt="HTML/CSS" />
                    <h5>HTML/CSS</h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="JavaScript" />
                    <h5>JavaScript</h5>
                  </div>
                  <div className="item">
                    <img src={meter3} alt="Express" />
                    <h5>Express.js</h5>
                  </div>
                  <div className="item">
                    <img src={meter1} alt="React" />
                    <h5>React.js</h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="Node" />
                    <h5>Node.js</h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="MongoDB" />
                    <h5>MongoDB</h5>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
