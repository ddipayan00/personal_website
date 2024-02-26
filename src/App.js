import './App.css';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Projects from './components/projects';
import Skills from './components/skills';
import ErrorPage from './components/error';
import SiteMap from './components/sitemap';
import Blogs from './components/blogs';
import Test from './components/test';
import Education from './components/education';
import Test2 from './components/common_component/test2';
import Test1 from './test1';
// import Footer from "./components/common_component/footer";

import { Routes, Route, Navigate } from 'react-router-dom';


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigate to='home' />} />
        <Route path='home' element={<Home />} />
        <Route path='skills' element={<Skills />} />
        <Route path='projects' element={<Projects />} />
        <Route path='education' element={<Education />} />
        <Route path='blogs' element={<Blogs />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='sitemap' element={<SiteMap />} />
        <Route path='test' element={<Test />} />
        <Route path='test1' element={<Test1 />} />
        <Route path='test2' element={<Test2 />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
