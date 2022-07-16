import { useContext } from 'react';
import { SectionContext } from './App';
import projectsData from './assets/projects.json';
import { AdvReadMoreMore } from 'read-more-more';

export default function Projects() {
  const thisSection = useContext(SectionContext).filter((section, index) => {
    return index === 1;
  })[0];

  return (
    <section id={thisSection.href} className='initial-section mt-60 mb-16'>
      <div className='child-section'>
        <h2 className='title-section'>{`My ${thisSection.name}`}</h2>
        <div className='grid gap-5 sm:grid-cols-2'>
          {projectsData.map((project, index) => {
            const { name, image, description, repository, published } = project;

            return (
              <div className='p-6 rounded-2xl border-4 border-slate-600 bg-gray-200 transition duration-500  hover:shadow-xl hover:scale-105' key={index}>
                <img src={image} alt={`${name}'s screenshoot`} className='mb-4 rounded-lg' />
                <h3 className='mb-4 mt-6 font-semibold text-primary-light text-2xl'>{name}</h3>
                <div className='mb-4 text-sm text-primary-light'>{description.length >= 95 ? <AdvReadMoreMore text={description} linesToShow={2} checkFor={50} color='#1e293b' btnStyles={{ color: '#6b7280' }} /> : description}</div>
                {published === '' ? (
                  <button className='block mb-4 text-sm text-slate-500 underline cursor-not-allowed' disabled>
                    Not yet published
                  </button>
                ) : (
                  <a href={published} target='blank' className='block mb-4 text-sm text-primary-light underline'>
                    Website published
                  </a>
                )}
                <button className='btn group'>
                  <a href={repository} target='blank' className='font-semibold text-sm text-white group-hover:text-primary-light'>
                    Go to repository
                  </a>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
