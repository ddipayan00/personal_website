// import NavBar from "./common_component/navbar";

const SiteMap = () => {
  return (
    <div class="container">
      {/* <NavBar /> */}
      <div className="text-center">{"The path is longer than it seems"}</div>
      <div>
        <div>
          <a href="/">Home</a>
        </div>
        <div>
          <a href="/skills">Skills</a>
        </div>
        <div>
          <a href="/projects">Projects</a>
        </div>
        <div>
          <a href="/about">About</a>
        </div>
        <div>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </div>
  );
};
export default SiteMap;
