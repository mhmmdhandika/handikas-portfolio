// TODO:
// Create Read more and less
import projectsData from './assets/projects.json';

export default function Projects() {
  return (
    <section id='projects' className='initial-section h-[200px]'>
      <div className='child-section'>
        <h1 className='mb-6 font-bold text-4xl text-primary'>My Projects</h1>
        <div className='grid gap-5 sm:grid-cols-2'>
          {projectsData.map((project, index) => {
            const { name, image, description, repository, published } = project;

            return (
              <div className='p-6 rounded-2xl bg-gray-200' key={index}>
                <img src={image} alt='n' className='mb-4 border rounded-lg' />
                <h3 className='mb-4 mt-6 font-semibold text-primary text-2xl'>{name}</h3>
                <p className='mb-4 text-sm text-primary'>{description}</p>
                {published === '' ? (
                  <button className='block mb-4 text-sm text-slate-500 underline cursor-not-allowed' disabled>
                    Not yet published
                  </button>
                ) : (
                  <a href={published} target='blank' className='block mb-4 text-sm text-primary underline'>
                    Website published
                  </a>
                )}
                <button className='group px-3 py-1 bg-primary border-4 border-primary rounded-xl transition duration-300 hover:bg-transparent'>
                  <a href={repository} className='font-semibold text-sm text-white group-hover:text-primary'>
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
