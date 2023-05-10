import { useState, useContext, useRef } from 'react';
import { SectionContext } from '../App';
import swal from 'sweetalert';

export default function Contact() {
  const thisSection = useContext(SectionContext).filter((section, index) => {
    return index === 3;
  })[0];

  // eslint-disable-next-line no-undef
  const scriptURL = import.meta.env.VITE_CONTACT_GOOGLE_SCRIPT;
  const form = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formState, setFormState] = useState(false);

  const handleSubmit = e => {
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
        setFormState(false);
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
    <section
      role={thisSection.href}
      id={thisSection.href}
      className='initial-section mb-10'
    >
      <div className='child-section'>
        <h2 className='title-section'>{thisSection.name} me</h2>
        <form
          name='submit-to-google-sheet'
          className='py-6 text-primary sm:border-4 sm:border-dashed sm:border-slate-300 sm:bg-white sm:p-10 lg:px-16'
          onSubmit={handleSubmit}
          ref={form}
        >
          <div>
            <label htmlFor='name' className='block'>
              Your name
            </label>
            <input
              type='text'
              name='name'
              id='name'
              className='block'
              onChange={() => setFormState(true)}
              required
            />
          </div>
          <div className='mt-2'>
            <label htmlFor='email' className='block'>
              Email
            </label>
            <input
              type='email'
              name='email'
              id='email'
              className={`peer block ${
                formState === false
                  ? ''
                  : 'invalid:mb-1 required:invalid:border-pink-400'
              }`}
              onChange={() => setFormState(true)}
              required
            />
            <p
              className={`hidden ${
                formState === false
                  ? ''
                  : 'mb-2 text-sm text-pink-600 peer-invalid:block'
              }`}
            >
              Please provide a valid email address.
            </p>
          </div>
          <div className='mt-2'>
            <label htmlFor='message' className='block'>
              Message
            </label>
            <textarea
              name='message'
              id='message'
              cols='30'
              rows='4'
              className='block'
              onChange={() => setFormState(true)}
              required
            ></textarea>
          </div>
          <div className='flex justify-end'>
            <button
              type='submit'
              className={`btn mt-4 py-2 px-4 font-semibold text-white ${
                isLoading
                  ? 'cursor-progress bg-transparent hover:text-primary'
                  : 'hover:text-primary'
              }`}
            >
              {isLoading ? (
                <span className='flex items-center justify-center gap-1'>
                  <img
                    src='/assets/img/loading-spinner.svg'
                    alt='loading'
                    width={25}
                  />{' '}
                  Loading...
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
