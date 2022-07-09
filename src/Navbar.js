import { useRef, useContext } from 'react';
import { SectionContext } from './App';

export default function Navbar() {
  const sectionList = useContext(SectionContext);
  const navBar = useRef(null);
  const hamburger = useRef(null);
  const navMenu = useRef(null);

  const handleHamburger = () => {
    hamburger.current.classList.toggle('hamburger-active');
    navMenu.current.classList.toggle('hidden');
  };

  window.onscroll = () => {
    const fixedNav = navBar.current.offsetTop;

    if (window.pageYOffset > fixedNav) {
      navBar.current.classList.add('navbar-fixed');
    } else {
      navBar.current.classList.remove('navbar-fixed');
    }
  };

  return (
    <nav className='fixed top-0 w-full transition duration-500' ref={navBar}>
      <div className='child-section py-6 relative flex justify-between items-center max-w-default mx-auto'>
        <h1 className='text-xl text-slate-700 font-semibold'>@mhmdhandika</h1>
        <button id='hamburger' className='block md:hidden' ref={hamburger} onClick={handleHamburger}>
          <span className='hamburger-line transition duration-300 ease-in-out'></span>
          <span className='hamburger-line transition duration-300 ease-in-out'></span>
          <span className='hamburger-line transition duration-300 ease-in-out'></span>
        </button>
        <div
          id='nav-menu'
          className='hidden absolute p-4 text-center bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full md:block md:static md:p-0 md:bg-transparent md:max-w-full md:shadow-none md:rounded-none'
          ref={navMenu}>
          <ul className='block md:flex md:justify-end'>
            {sectionList.map((section, index) => {
              return (
                <li className={`my-2 flex items-center pb-2 md:pb-0 md:border-none ${index === sectionList.length - 1 ? '' : 'border-b border-slate-300'}`} key={index}>
                  <a href={`#${section.href}`} className={`nav-items w-full px-5 py-2 md:px-3 ${index === sectionList.length - 1 ? 'md:pr-0' : ''}`}>
                    {section.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
