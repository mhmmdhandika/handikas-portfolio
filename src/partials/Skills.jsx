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
        <ul className='grid grid-cols-3 content-center gap-4 md:grid-cols-4 md:gap-5 xl:grid-cols-5'>
          {skillsData.map((skill, index) => {
            return (
              <li
                className='group relative flex min-h-[10rem] items-center justify-center border-2 border-slate-300 p-3 transition ease-in hover:-translate-y-2 hover:shadow-lg md:p-6'
                key={index}
              >
                <img src={skill.logo} alt={skill.name} className='w-24' />
                <div className='absolute bottom-0 w-full bg-slate-400 text-center opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:bottom-[45%] group-hover:bg-slate-200 group-hover:bg-opacity-70 group-hover:opacity-100'>
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
