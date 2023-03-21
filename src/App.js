import { createContext } from 'react';
import sectionList from './assets/data/section-list.json';
import Navbar from './partials/Navbar';
import Hero from './partials/Hero';
import Projects from './partials/Projects';
import Skills from './partials/Skills';
import Contact from './partials/Contact';
import Footer from './partials/Footer';

const SectionContext = createContext(null);

function App() {
  return (
    <SectionContext.Provider value={sectionList}>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </SectionContext.Provider>
  );
}

export default App;
export { SectionContext };
