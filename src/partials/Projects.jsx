import { useContext } from 'react';
import { SectionContext } from '../App';
import projectsData from '../data/projects.json';
import ReadMore from '../components/ReadMore';

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
          {projectsData
            .slice(lastFourProjects)
            .reverse()
            .map((project, index) => {
              const { name, image, description, repository, published } =
                project;

              return (
                <div
                  className='rounded-2xl border-4 border-slate-400 bg-slate-100 transition duration-500 overflow-hidden hover:shadow-xl'
                  key={index}
                >
                  {/* image */}
                  <div role='image card' className='group overflow-hidden'>
                    <img
                      src={image}
                      alt={`${name}'s screenshot`}
                      className='rounded-lg aspect-video object-cover transition duration-500 group-hover:scale-110'
                    />
                  </div>
                  {/* text card */}
                  <div role='text card' className='flex flex-col gap-4 m-5'>
                    {/* title */}
                    <h3 className='font-semibold text-primary text-2xl'>
                      {name}
                    </h3>
                    {/* caption */}
                    <div className='text-sm text-primary'>
                      {description.length >= 95 ? (
                        <ReadMore>{description}</ReadMore>
                      ) : (
                        description
                      )}
                    </div>
                    <div className='flex justify-end place-content-end gap-x-2'>
                      {/* link to the website */}
                      {published !== '' && (
                        <button className='btn text-white bg-primary block w-fit font-bold '>
                          <a
                            href={published}
                            target='blank'
                            className='text-sm'
                          >
                            Published
                          </a>
                        </button>
                      )}
                      {/* link to the repository */}
                      <button className='btn group sm:w-fit'>
                        <a
                          href={repository}
                          target='blank'
                          className='font-semibold text-sm text-white group-hover:text-primary'
                        >
                          Repository
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
