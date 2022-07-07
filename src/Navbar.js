import { useRef } from 'react';

export default function Navbar() {
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
    <nav className='fixed top-0 p-6 w-full transition' ref={navBar}>
      <div className='relative flex justify-between items-center max-w-default mx-auto'>
        <h1 className='text-xl text-slate-700 font-semibold'>@mhmdhandikao</h1>
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
            <li className='nav-items py-2 md:px-3'>
              <a href='#about'>About</a>
            </li>
            <li className='nav-items py-2 md:px-3'>
              <a href='#projects'>Projects</a>
            </li>
            <li className='nav-items py-2 md:pl-3'>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
