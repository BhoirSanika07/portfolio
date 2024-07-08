

import './App.css';
import Navbar from './components/Navbar';
import Head1 from './components/Head1';
import AboutMe from './components/AboutMe';
// import TechSkills from './components/TechSkills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import MoreMe from './components/MoreMe';
function App() {
  return (
    <>
    <Navbar/>
    <Head1/>
    <AboutMe/>
    {/* <TechSkills/> */}
    <Experience/>
    <Projects/>
    <MoreMe/>
    </>
  );
}

export default App;
