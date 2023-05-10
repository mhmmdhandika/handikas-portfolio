import { useContext } from 'react';
import { SectionContext } from '../App';
import {
  AiOutlineGithub as Github,
  AiFillLinkedin as Linkedin,
} from 'react-icons/ai';
import { FaQuora as Quora } from 'react-icons/fa';
import { BsMedium as Medium } from 'react-icons/bs';

export default function Hero() {
  const thisSection = useContext(SectionContext).filter((section, index) => {
    return index === 0;
  })[0];

  const socmed = [
    {
      name: 'Github',
      url: 'https://github.com/mhmmdhandika',
      icon: <Github />,
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/mhmdhandika',
      icon: <Linkedin />,
    },
    {
      name: 'Quora',
      url: 'https://id.quora.com/profile/Muhamad-Handika',
      icon: <Quora />,
    },
    {
      name: 'Medium',
      url: 'https://medium.com/@muhammadhandika78',
      icon: <Medium />,
    },
  ];

  return (
    <header id={thisSection.href} className='initial-section md:mt-28 lg:mt-44'>
      <div className='child-section mx-auto flex flex-col items-center p-6 md:justify-between lg:flex-row lg:items-center xl:p-0'>
        <div className='flex flex-col items-center gap-4 text-primary sm:w-full md:order-2 lg:order-1 lg:w-3/5 lg:items-start'>
          <h4>Hello there 👋 I am</h4>
          <h1 className='text-6xl font-bold text-secondary'>
            Muhamad <br />
            Handika S.
          </h1>
          <h2 className='text-md'>Junior Frontend Web Developer</h2>
          <p className='max-w-[30rem] text-center text-sm md:max-w-[25rem] lg:text-start'>
            Specializes in React Js, Tailwind CSS, responsive design, HTML, CSS,
            and JavaScript. <br /> Having basic skills in backend side with Node
            Js, Express Js framework and MongoDB.
          </p>
          <ul className='flex gap-3'>
            {socmed.map((socmed, index) => {
              const { name, url, icon } = socmed;

              return (
                <li key={index}>
                  <a
                    href={url}
                    role={`${name}'s icon social media`}
                    target='blank'
                    className='flex items-center gap-1 rounded-full border-4 border-slate-200 p-2 text-2xl text-slate-600 transition duration-300 hover:border-slate-600 hover:bg-slate-600 hover:text-white sm:px-3'
                  >
                    <span>{icon}</span>
                    <span className='hidden text-sm sm:inline'>{name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='lg:order-1lg:order-2 group relative mt-10 md:order-1 md:mt-0 md:mb-10 md:block md:w-2/5'>
          <div className='img-profile relative w-[20rem] overflow-hidden lg:w-[23rem]'>
            <img
              src='/assets/img/other/my-photo.png'
              alt="Muhamad Handika Sopian's photo"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
