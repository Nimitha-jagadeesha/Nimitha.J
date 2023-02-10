import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './Projects';
import Introduction from './Introduction';
import CodingProfiles from './CodingProfiles';
import Contact from './Contact';
function App() {
  return (
    <>
      <Introduction />
      <Projects />
      <Contact/>
      <CodingProfiles/>
    </>
  );
}

export default App;
