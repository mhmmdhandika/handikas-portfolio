import { useContext } from 'react';
import { SectionContext } from '../App';
import {
  AiOutlineGithub as Github,
  AiFillLinkedin as Linkedin,
} from 'react-icons/ai';
import { FaQuora as Quora } from 'react-icons/fa';
import { SiFrontendmentor as FrontendMentor } from 'react-icons/si';

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
      url: 'https://www.linkedin.com/in/muhamad-handika-sopian-56b24722a/',
      icon: <Linkedin />,
    },
    {
      name: 'Quora',
      url: 'https://id.quora.com/profile/Muhamad-Handika',
      icon: <Quora />,
    },
    {
      name: 'Frontend Mentor',
      url: 'https://www.frontendmentor.io/profile/mhmmdhandika',
      icon: <FrontendMentor />,
    },
  ];

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
            {socmed.map((socmed, index) => {
              const { name, url, icon } = socmed;

              return (
                <li key={index}>
                  <a
                    href={url}
                    role={`${name}'s icon social media`}
                    target='blank'
                    className='block socmed-icons'
                  >
                    {icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='hidden group md:block md:w-2/5'>
          <img
            src='/assets/img/my-vector.jpg'
            alt='my image'
            className='rounded-full transition duration-500 group-hover:animate-bounce'
          />
        </div>
      </div>
    </header>
  );
}
