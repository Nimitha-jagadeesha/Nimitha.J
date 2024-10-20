import './App.css';
import Projects from './Projects';
import Introduction from './Introduction';
import Certificates from './Certificates';
import CodingProfiles from './CodingProfiles';
import Contact from './Contact';
import Navigation from './Navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Skills from './Skills';
import ExperienceEducation from './ExperienceEducation';
function App() {
  AOS.init();
  return (
    <div>
      <Navigation />
      <Introduction />
      <Skills/>
      <ExperienceEducation/>
      <Projects />
      <Contact />
      <CodingProfiles />
     <Certificates/>
    </div>
  );
}

export default App;
