import { IoLocationSharp } from 'react-icons/io5';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className='child-section py-11 text-center md:py-20'>
        <p className='text-md mx-auto mt-3 font-semibold md:max-w-[380px]'>
          <q>
            {`Hi folks! You're the reason I'm smiling today, glad I'm you have
            come to my website :)`}
          </q>
        </p>
        <div className='mt-3 flex items-center justify-center text-sm'>
          <span className='mr-1'>
            <IoLocationSharp />
          </span>
          <p>Bekasi, Indonesia</p>
        </div>
      </div>
      <div className='w-full bg-slate-50 py-2 text-center text-xs font-semibold text-slate-700'>
        Copyright © {currentYear}. All rights reserved.
      </div>
    </footer>
  );
}
