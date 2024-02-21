import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const NavBar = () => {
  let navigate = useNavigate();
  const [ActiveRoute, setActiveRoute] = useState();
  const handleClick = (event) => {
    // 👇️ add class to the body element
    setActiveRoute();
    console.log(document);
    event.target.classList.add("active");

    // document.element.classList.add('active');

    // 👇️ toggle class on the body element
    // document.body.classList.toggle('bg-salmon');
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary shadow p-3 mb-5 bg-white rounded"
        style={{zIndex:999,position:"fixed",width:"100%"}}
      >
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="navbar-brand active"
                style={{
                  "text-shadow": "1px 1px 2px pink",
                }}
                aria-current="page"
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(e);
                  navigate("/home");
                }}
                href="/home"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="navbar-brand"
                style={{
                  "text-shadow": "1px 1px 2px pink",
                }}
                aria-disabled="true"
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(e);
                  navigate("/skills");
                }}
                href="/skills"
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                className="navbar-brand"
                style={{
                  "text-shadow": "1px 1px 2px pink",
                }}
                aria-disabled="true"
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(e);
                  navigate("/projects");
                }}
                href="/projects"
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className="navbar-brand"
                style={{
                  "text-shadow": "1px 1px 2px pink",
                }}
                aria-disabled="true"
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(e);
                  navigate("/blogs");
                }}
                href="/blogs"
              >
                Blogs
              </a>
            </li>
            <li className="nav-item">
              <a
                className="navbar-brand"
                style={{
                  "text-shadow": "1px 1px 2px pink",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(e);
                  navigate("/about");
                }}
                href="/about"
              >
                About
              </a>
            </li>
            <li className="nav-item ">
              <a
                className="navbar-brand"
                // aria-disabled="true"
                style={{
                  "text-shadow": "1px 1px 2px pink",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(e);
                  navigate("/contact");
                }}
                href="/contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
};
export default NavBar;
