import { createContext } from 'react';
import sectionList from './assets/json/section-list.json';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

// TODO: Create a Contact Field
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
