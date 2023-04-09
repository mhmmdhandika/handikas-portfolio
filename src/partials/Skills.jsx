import { useContext } from 'react';
import { SectionContext } from '../App';
import skillsData from '../data/skills.json';

export default function Skills() {
  const thisSection = useContext(SectionContext).filter((section, index) => {
    return index === 2;
  })[0];

  return (
    <section
      role={thisSection.href}
      id={thisSection.href}
      className='initial-section'
    >
      <div className='child-section'>
        <h2 className='title-section'>{thisSection.name}</h2>
        <ul className='grid gap-4 grid-cols-3 content-center md:gap-5 md:grid-cols-4 xl:grid-cols-5'>
          {skillsData.map((skill, index) => {
            return (
              <li
                className='group min-h-[10rem] relative flex justify-center items-center p-3 border-2 border-slate-300 transition ease-in hover:shadow-lg hover:-translate-y-2 md:p-6'
                key={index}
              >
                <img src={skill.logo} alt={skill.name} className='w-24' />
                <div className='opacity-0 transition duration-500 group-hover:block absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-fit backdrop-blur-sm group-hover:opacity-100 group-hover:top-1/2 group-hover:-translate-y-1/2 group-hover:bg-slate-200 group-hover:bg-opacity-70 text-center'>
                  <h4 className='font-semibold text-slate-700 transition duration-1000'>
                    {skill.name}
                  </h4>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
