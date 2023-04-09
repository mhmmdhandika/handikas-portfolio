import { useContext } from 'react';
import { SectionContext } from '../App';
import myImg from '../assets/img/my-vector.jpg';
import socmedData from '../assets/data/socmed';

export default function Hero() {
  const thisSection = useContext(SectionContext).filter((section, index) => {
    return index === 0;
  })[0];

  return (
    <header id={thisSection.href} className='initial-section mb-44 md:mt-44'>
      <div className='child-section p-6 mx-auto xl:p-0 md:flex md:justify-between md:items-start lg:items-center'>
        <div className='flex flex-col gap-4 text-primary sm:w-10/12 md:w-3/5'>
          <h4>Hello there 👋 I am</h4>
          <h1 className='text-6xl text-secondary font-bold'>
            Muhamad <br />
            Handika S.
          </h1>
          <h2 className='text-md'>Junior Frontend Web Developer</h2>
          <p className='text-sm max-w-[30rem] md:max-w-[25rem]'>
            Specializes in React Js, Tailwind CSS, responsive design, HTML, CSS,
            and JavaScript. <br /> Having basic skills in backend side with Node
            Js, Express Js framework and MongoDB.
          </p>
          <ul className='flex gap-3'>
            {socmedData.map((socmed, index) => {
              const { name, url } = socmed;

              return (
                <li key={index}>
                  <a
                    href={url}
                    role={`${name}'s icon social media`}
                    target='blank'
                    className='block socmed-icons'
                  >
                    {name}
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
