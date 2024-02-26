import NavBar from "./common_component/navbar";
import { Typewriter } from "react-simple-typewriter";
import "./styles/home.css";
import "./styles/common.css";
import { IconContext } from "react-icons";
import { FaBeer } from "react-icons/fa";
// import Footer from "./common_component/footer";
const right_arrow_svg = (
  <svg
    stroke="currentColor"
    fill="none"
    stroke-width="0"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginRight: "10px" }}
  >
    <path
      d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
      fill="currentColor"
    ></path>
  </svg>
);
const main_section = (
  <div class="card" style={{border: "none" }}>
    <div class="card-body">
      <h3 class="card-title" style={{ color: "blue" }}>
        {"<"}
        <span style={{ color: "black" }}>
          <Typewriter
            words={[
              "Software Engineer",
              "Backend Engineer",
              "Tech Enthusiast",
              "Photograpy",
              "Always Curious About Unknown"
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
        <div
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
              paddingBottom:"5px",
              textShadow:" 1px 1px 2px black"
            }}
          >
            <span style={{ color: "#00DDFF", margin: 0, padding: 0 }}>
              Welcome to
            </span>{" "}
            <span style={{ color: "#f75990", margin: 0, padding: 0 }}>
              Dipayan's
            </span>{" "}
            <span style={{color:" #8458B3", margin: 0, padding: 0 }}>Portfolio </span>{" "}
            <span style={{color:"#beef00", margin: 0, padding: 0 }}>Website</span>
            <span style={{color:"yellow", margin: 0, padding: 0 }}>!</span>
          </div>

          <div style={{ textAlign: "center" ,fontStyle:"italic"}}>
            <p style={{ textAlign: "left" }}>
              <p>
                Hey there !{" "}
                <IconContext.Provider
                  value={{ color: "#e1b382", className: "global-class-name" }}
                >
                  <span>
                    <FaBeer />
                  </span>
                </IconContext.Provider>
              </p>
            </p>
            <p style={{ textAlign: "left" }}>
              Welcome to my little corner of the web.
            </p>
            <p style={{ textAlign: "left" }}>
              I'm Dipayan, a <b>Backend Developer</b> passionate about crafting
              efficient solutions to complex problems.
            </p>
            <p style={{ textAlign: "left" }}>
              Let's connect and explore how I can help bring your ideas to life
              by brainstorming.
            </p>
          </div>
          <div style={{ marginTop: "1%", textAlign: "start" }}>
            <p>
              <h4 style={{textShadow:" 1px 1px 2px black", color:"red",fontStyle:"italic"}}>If you are looking for </h4>
            </p>
            <p>
              <ul style={{fontStyle:"italic", "list-style-type": "none", margin: 0, padding: 0 }}>
                <li>
                  <h5>{right_arrow_svg}Complex Real World Problem Solver</h5>
                </li>
                <li>
                  <h5>{right_arrow_svg}Business Solutions</h5>
                </li>
              </ul>
            </p>
            <p>
              <h4 style={{ textShadow:" 1px 1px 2 black", color:"#feb300",fontStyle:"italic"}}>
                So then I'm here
              </h4>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
const Home = () => {
  // const home_text = "Home Sweet Home";
  return (
    <div className="custom-container">
      <NavBar />
      {/* {home_text} */}
      {main_section}
    </div>
  );
};
export default Home;
