import { createContext } from 'react';
import sectionList from './assets/section-list.json';
import Navbar from './Navbar';
import Hero from './Hero';
import Projects from './Projects';
import Skills from './Skills';
// import Contact from './Contact';
// import Footer from './Footer';

// TODO: Create a Contact Field
const SectionContext = createContext(null);

function App() {
  return (
    <SectionContext.Provider value={sectionList}>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
    </SectionContext.Provider>
  );
}

export default App;
export { SectionContext };
