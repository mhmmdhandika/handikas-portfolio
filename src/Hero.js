import { AiOutlineGithub, AiOutlineInstagram } from 'react-icons/ai';
import { FaQuora } from 'react-icons/fa';
import myImg from './assets/img/my-vector.jpg';

export default function Hero() {
  return (
    <header className='initial-section mt-36 mb-40'>
      <div className='max-w-default p-6 mx-auto xl:p-0 md:flex md:justify-between md:items-start lg:items-center'>
        <div className='sm:w-10/12 md:w-3/5'>
          <h4>Hello there! I am</h4>
          <h1 className='mt-2 mb-3 text-6xl text-slate-800 font-bold'>
            Muhamad <br />
            Handika S.
          </h1>
          <p className='py-4 text-md text-slate-700'>Self taught developer | Deadwood</p>
          <p className='md:text-sm'>
            A boy who interested in Frontend Web Development.
            <br /> Currently, I focus on React Js and kinda bit interested in UI/UX design.
          </p>
          <ul className='flex'>
            <li className='socmed-icons'>
              <AiOutlineGithub className='fill-current' />
            </li>
            <li className='socmed-icons'>
              <FaQuora />
            </li>
            <li className='socmed-icons'>
              <AiOutlineInstagram />
            </li>
          </ul>
        </div>
        <div className='hidden group md:block md:w-2/5'>
          <img src={myImg} alt='anu' className='rounded-full transition duration-500 group-hover:animate-bounce' />
        </div>
      </div>
    </header>
  );
}
