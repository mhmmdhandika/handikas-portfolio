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
        <form className='py-6 sm:border-dashed sm:border-slate-300 sm:border-4 sm:p-10 lg:px-16'>
          <div>
            <label htmlFor='name' className='block'>
              Your name
            </label>
            <input type='text' name='name' id='name' className='block' />
          </div>
          <div className='mt-2'>
            <label htmlFor='email' className='block'>
              Email
            </label>
            <input type='email' name='email' id='email' className='block peer invalid:border-pink-400 invalid:mb-1' />
            <p className='hidden peer-invalid:block text-pink-600 text-sm mb-2'>Please provide a valid email address.</p>
          </div>
          <div className='mt-2'>
            <label htmlFor='message' className='block'>
              Message
            </label>
            <textarea name='message' id='message' cols='30' rows='4' className='block'></textarea>
          </div>
          <button type='submit' className='mt-4 py-2 px-4 btn text-white font-semibold hover:text-slate-800'>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
