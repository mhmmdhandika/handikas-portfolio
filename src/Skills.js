import skillsData from './assets/skills.json';

export default function Skills() {
  return (
    <section id='skills' className='initial-section '>
      <div className='child-section'>
        <h2 className='title-section'>Skills</h2>
        <ul className='grid gap-4 grid-cols-3 content-center md:gap-5 lg:grid-cols-4 xl:grid-cols-5'>
          {skillsData.map((skill, index) => {
            return (
              <li className='group p-4 border-2 border-slate-300 transition ease-in hover:border-transparent hover:shadow-lg' key={index}>
                <img src={skill.logo} alt={skill.name} className='group-hover:drop-shadow-xl' />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
