import { useContext } from 'react';
import { SectionContext } from '../App';
import projectsData from '../data/projects.json';
import ReadMore from '../components/ReadMore';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller, Pagination, EffectCoverflow, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Projects() {
  const thisSection = useContext(SectionContext).filter((section, index) => {
    return index === 1;
  })[0];

  const reversedProjectsData = [...projectsData].reverse();

  return (
    <section
      role={thisSection.href}
      id={thisSection.href}
      className='initial-section my-16'
    >
      <div className='child-section'>
        <h2 className='title-section'>{`My ${thisSection.name}`}</h2>
        <Swiper
          modules={[Controller, Pagination, Navigation, EffectCoverflow]}
          effect='coverflow'
          centeredSlides={true}
          spaceBetween={50}
          slidesPerView='2'
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ clickable: true }}
          initialSlide={1}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
        >
          {reversedProjectsData.map((project, index) => {
            const { name, image, description, repository, published } = project;

            return (
              <SwiperSlide
                className='max-h-[500px] w-full overflow-hidden rounded-2xl border-4 border-slate-400 bg-slate-100 transition duration-500 hover:shadow-xl'
                key={index}
              >
                {/* image */}
                <div role='image card' className='group overflow-hidden'>
                  <img
                    src={image}
                    alt={`${name}'s screenshot`}
                    className='aspect-video rounded-lg object-cover transition duration-500 group-hover:scale-110'
                  />
                </div>
                {/* text card */}
                <div role='text card' className='m-5 flex flex-col gap-4'>
                  {/* title */}
                  <h3 className='text-2xl font-semibold text-primary'>
                    {name}
                  </h3>
                  {/* caption */}
                  <div className='text-sm text-primary'>
                    {description.length >= 80 ? (
                      <ReadMore>{description}</ReadMore>
                    ) : (
                      description
                    )}
                  </div>
                  <div className='flex place-content-end justify-end gap-x-2'>
                    {/* link to the website */}
                    {published !== '' && (
                      <button className='btn block w-fit bg-primary font-bold text-white '>
                        <a href={published} target='blank' className='text-sm'>
                          Published
                        </a>
                      </button>
                    )}
                    {/* link to the repository */}
                    <button className='btn group sm:w-fit'>
                      <a
                        href={repository}
                        target='blank'
                        className='text-sm font-semibold text-white group-hover:text-primary'
                      >
                        Repository
                      </a>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          <div className='swiper-button-navigation'>
            <div className='swiper-button-next text-primary'></div>
            <div className='swiper-button-prev'></div>
          </div>
        </Swiper>
        {/* <div className='grid gap-5 sm:grid-cols-2'>
        </div> */}
      </div>
    </section>
  );
}
