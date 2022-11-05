import { useContext } from 'react';
import { SectionContext } from '../App';
import projectsData from '../assets/data/projects.json';
import { AdvReadMoreMore } from 'read-more-more';

export default function Projects() {
  const thisSection = useContext(SectionContext).filter((section, index) => {
    return index === 1;
  })[0];

  const lastFourProjects = -4;

  return (
    <section
      role={thisSection.href}
      id={thisSection.href}
      className='initial-section mt-60 mb-16'
    >
      <div className='child-section'>
        <h2 className='title-section'>{`My ${thisSection.name}`}</h2>
        <div className='grid gap-5 sm:grid-cols-2'>
          {projectsData.slice(lastFourProjects).map((project, index) => {
            const { name, image, description, repository, published } = project;

            return (
              <div
                className='rounded-2xl border-4 border-slate-400 bg-slate-100 transition duration-500 overflow-hidden hover:shadow-xl'
                key={index}
              >
                <div role='image card' className='group overflow-hidden'>
                  <img
                    src={image}
                    alt={`${name}'s screenshot`}
                    className='rounded-lg aspect-video object-cover transition duration-500 group-hover:scale-110'
                  />
                </div>
                <div role='text card' className='flex flex-col gap-4 m-5'>
                  <h3 className='font-semibold text-primary text-2xl'>
                    {name}
                  </h3>
                  <div className='text-sm text-primary'>
                    {description.length >= 95 ? (
                      <AdvReadMoreMore
                        text={description}
                        linesToShow={2}
                        checkFor={50}
                        color='#1e293b'
                        btnStyles={{ color: '#6b7280' }}
                      />
                    ) : (
                      description
                    )}
                  </div>
                  {published === '' ? (
                    <button
                      className='block w-fit text-sm text-slate-500 underline cursor-not-allowed'
                      disabled
                    >
                      Not yet published
                    </button>
                  ) : (
                    <button className='block w-fit text-sm text-primary underline'>
                      <a href={published} target='blank'>
                        Website published
                      </a>
                    </button>
                  )}
                  <button className='btn group sm:w-fit'>
                    <a
                      href={repository}
                      target='blank'
                      className='font-semibold text-sm text-white group-hover:text-primary'
                    >
                      Go to repository
                    </a>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
