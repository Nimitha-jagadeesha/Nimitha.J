import './App.css';
import Projects from './Projects';
import Introduction from './Introduction';
import CodingProfiles from './CodingProfiles';
import Contact from './Contact';
import Navigation from './Navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  AOS.init();
  return (
    <div>
      <Navigation />
      <Introduction />
      <Projects />
      <Contact />
      <CodingProfiles />
    </div>
  );
}

export default App;
