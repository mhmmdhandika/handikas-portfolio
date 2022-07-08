import { useContext } from 'react';
import { SectionContext } from './App';

export default function Contact() {
  const thisSection = useContext(SectionContext).filter((section, index) => {
    return index === 3;
  })[0];

  return (
    <section id={thisSection.href} className='initial-section'>
      <div className='child-section'>
        <h2 className='title-section'>{thisSection.name}</h2>
        <form className='py-6 grid gap-x-4 gap-y-2 md:grid-cols-2 lg:grid-row-3 lg:content-between'>
          <div className='lg:row-start-1'>
            <label htmlFor='name' className='block'>
              Your name
            </label>
            <input type='text' name='name' id='name' className='block' />
          </div>
          <div className='lg: w-full lg:row-start-2 lg:place-self-end'>
            <label htmlFor='email' className='block'>
              Email
            </label>
            <input type='email' name='email' id='email' className='block peer invalid:border-pink-400 invalid:mb-1' />
            <p className='hidden peer-invalid:block text-pink-600 text-sm mb-2'>Please provide a valid email address.</p>
          </div>
          <div className='md:col-span-2 lg:col-start-2 lg:row-span-2 lg:col-span-1'>
            <label htmlFor='message' className='block'>
              Message
            </label>
            <textarea name='message' id='message' cols='30' rows='4' className='block'></textarea>
          </div>
          <button type='submit' className='mt-4 py-2 px-4 btn text-white font-semibold place-self-end hover:text-slate-800 md:col-start-2 md:block md:mt-1'>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
