import NavBar from "./common_component/navbar";
import { Typewriter } from "react-simple-typewriter";
import "./styles/home.css";
import { IconContext } from "react-icons";
import { FaBeer } from "react-icons/fa";
const right_arrow_svg = (
  <>
    <svg
      stroke="currentColor"
      fill="none"
      stroke-width="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
        fill="currentColor"
      ></path>
    </svg>
  </>
);
const main_section = (
  <section class="card" style={{ border: "none" }}>
    <div class="card-body">
      <h3 class="card-title" style={{ color: "blue" }}>
        {"<"}
        <span style={{ color: "black" }}>
          <Typewriter
            words={[
              "Backend Engineering",
              "Web Development",
              "Tech Enthusiast",
              "Photograpy",
            ]}
            loop={100}
            cursor
            cursorStyle="/>"
            cursorColor="red"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h3>
      <div class="card-text">
        <p
          className="card"
          style={{
            // backgroundColor: "rgb(46, 180, 195)",
            textShadow: "",
            padding: "12px",
            width: "100%",
            border: "none",
            fontSize: "20px",
            marginBottom: "10px",
          }}
        >
          <div
            className="protest-riot-regular"
            style={{
              textAlign: "center",
              letterSpacing: ".5rem",
              fontSize: "50px",
            }}
          >
            <span style={{ color: "black", margin: 0, padding: 0 }}>
              Welcome to
            </span>{" "}
            <span style={{ color: "blue", margin: 0, padding: 0 }}>
              Dipayan's
            </span>{" "}
            <span style={{ color: "red", margin: 0, padding: 0 }}>
              Portfolio{" "}
            </span>{" "}
            <span style={{ color: "green", margin: 0, padding: 0 }}>
              Website
            </span>
            <span style={{ color: "yellow", margin: 0, padding: 0 }}>!</span>
          </div>

          <div style={{ textAlign: "center" }}>
            <p style={{ textAlign: "left" }}>
              <p>
                Hey there!{" "}
                <IconContext.Provider
                  value={{ color: "#000", className: "global-class-name" }}
                >
                  <span>
                    <FaBeer />
                  </span>
                </IconContext.Provider>
              </p>
            </p>
            <p style={{ textAlign: "left" }}>
              I'm Dipayan, a passionate <b>backend developer</b> with a penchant
              for creating immersive online experiences.
            </p>
            <p style={{ textAlign: "left" }}>
              Welcome to my little corner of the web.
            </p>{" "}
            <p style={{ textAlign: "left" }}>
              Whether you're a potential employer, a fellow developer, or just
              curious about my work, I'm thrilled to have you here.
            </p>
          </div>
          <p style={{ textAlign: "start" }}>
            <h5 style={{ color: "blue" }}>Skills:</h5>
            <p>
              When it comes to tools of the trade, I've got a few tricks up my
              sleeve:
            </p>
            <span>
              <ul style={{ "list-style-type": "none", margin: 0, padding: 0 }}>
                <li>
                  <h6 style={{ color: "blue" }}>{right_arrow_svg}Frontend:</h6>
                  <p>HTML, CSS, JavaScript, React, Vue.js</p>
                </li>
                <li>
                  <h6 style={{ color: "blue" }}>{right_arrow_svg}Backend:</h6>
                  <p>Node.js, Express.js, Django, Flask, FastAPI</p>
                </li>
                <li>
                  <h6 style={{ color: "blue" }}>{right_arrow_svg}Databases:</h6>
                  <p>MongoDB, MySQL, PostgreSQL</p>
                </li>
                <li>
                  <h6 style={{ color: "blue" }}>{right_arrow_svg}Other:</h6>
                  <p>Git, RESTful APIs, Responsive Design</p>
                </li>
              </ul>
            </span>
          </p>
        </p>
      </div>
    </div>
  </section>
);
const Home = () => {
  // const home_text = "Home Sweet Home";
  return (
    <>
      <NavBar />
      {/* {home_text} */}
      {main_section}
    </>
  );
};
export default Home;
