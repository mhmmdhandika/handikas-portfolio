import { useContext } from 'react';
import { SectionContext } from '../App';
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiFillLinkedin,
} from 'react-icons/ai';
import { FaQuora } from 'react-icons/fa';
import myImg from '../assets/img/my-vector.jpg';
import socmedData from '../assets/json/socmed.json';

export default function Hero() {
  const thisSection = useContext(SectionContext).filter((section, index) => {
    return index === 0;
  })[0];

  return (
    <header id={thisSection.href} className='initial-section mb-44 md:mt-44'>
      <div className='child-section p-6 mx-auto xl:p-0 md:flex md:justify-between md:items-start lg:items-center'>
        <div className='text-primary sm:w-10/12 md:w-3/5'>
          <h4>Hello there 👋 I am</h4>
          <h1 className='mt-2 mb-3 text-6xl text-secondary font-bold'>
            Muhamad <br />
            Handika S.
          </h1>
          <p className='py-4 text-md'>
            Self-taught developer | Life-long learner
          </p>
          <p className='md:text-sm'>
            A boy who interested in Frontend Web Development.
            <br /> Currently, I focus in React Js and kinda bit interested in
            UI/UX design.
          </p>
          <ul className='flex'>
            {socmedData.map((socmed, index) => {
              const { name, url } = socmed;
              const logo = [
                <AiOutlineGithub key={name} />,
                <AiFillLinkedin key={name} />,
                <FaQuora key={name} />,
                <AiOutlineInstagram key={name} />,
              ];

              return (
                <li key={index}>
                  <a href={url} target='blank' className='block socmed-icons'>
                    {logo[index]}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='hidden group md:block md:w-2/5'>
          <img
            src={myImg}
            alt='anu'
            className='rounded-full transition duration-500 group-hover:animate-bounce'
          />
        </div>
      </div>
    </header>
  );
}
