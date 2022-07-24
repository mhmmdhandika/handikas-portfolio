import { useState, useContext, useRef } from 'react';
import { SectionContext } from '../App';
import Loading from '../components/Loading';
import swal from 'sweetalert';

export default function Contact() {
  const thisSection = useContext(SectionContext).filter((section, index) => {
    return index === 3;
  })[0];

  const scriptURL = process.env.REACT_APP_CONTACT_GOOGLE_SCRIPT;
  const form = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleForm = e => {
    e.preventDefault();
    setIsLoading(true);
    fetch(scriptURL, { method: 'POST', body: new FormData(form.current) })
      .then(response => {
        setIsLoading(false);
        swal({
          icon: 'success',
          text: 'Your Message was Sent Successfully!',
          button: true,
          timer: 1500,
        });
        form.current.reset();
        console.log('Success!', response);
      })
      .catch(error => {
        setIsLoading(false);
        swal({
          icon: 'error',
          text: `${error.message}`,
          button: true,
          timer: 1500,
        });
        console.error('Error!', error.message);
      });
  };

  return (
    <section id={thisSection.href} className='initial-section'>
      <div className='child-section'>
        <h2 className='title-section'>{thisSection.name} me</h2>
        <form name='submit-to-google-sheet' className='py-6 text-primary-light sm:border-dashed sm:bg-white sm:border-slate-300 sm:border-4 sm:p-10 lg:px-16' onSubmit={handleForm} ref={form}>
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
          <div className='flex justify-end'>
            <button type='submit' className={`mt-4 py-2 px-4 btn text-white font-semibold ${isLoading ? 'cursor-progress hover:bg-primary-light hover:text-white' : 'hover:text-primary-light'}`}>
              {isLoading ? (
                <span className='flex justify-center items-center'>
                  <Loading /> Loading...
                </span>
              ) : (
                'Submit'
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
