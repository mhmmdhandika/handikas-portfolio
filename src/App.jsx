import { createContext, Suspense, lazy } from 'react';
import Loading from './components/Loading';
import sectionList from './data/section-list.json';

// import Navbar from './partials/Navbar';
// import Hero from './partials/Hero';
// import Projects from './partials/Projects';
// import Skills from './partials/Skills';
// import Contact from './partials/Contact';
// import Footer from './partials/Footer';

const Navbar = lazy(() => import('./partials/Navbar'));
const Hero = lazy(() => import('./partials/Hero'));
const Projects = lazy(() => import('./partials/Projects'));
const Skills = lazy(() => import('./partials/Skills'));
const Contact = lazy(() => import('./partials/Contact'));
const Footer = lazy(() => import('./partials/Footer'));

const SectionContext = createContext(null);

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <SectionContext.Provider value={sectionList}>
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </SectionContext.Provider>
    </Suspense>
  );
}

export default App;
export { SectionContext };
