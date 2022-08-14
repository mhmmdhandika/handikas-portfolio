import { IoLocationSharp } from "react-icons/io5";

export default function Footer() {
  return (
    <footer>
      <div className="child-section py-11 text-center md:py-20">
        <p className="text-md mt-3 font-semibold mx-auto md:max-w-[380px]">
          <q>
            {`Hi folks! You're the reason I'm smiling today, glad I'm you have
            come to my website :)`}
          </q>
        </p>
        <div className="mt-3 text-sm flex justify-center items-center">
          <span className="mr-1">
            <IoLocationSharp />
          </span>
          <p>Bekasi, Indonesia</p>
        </div>
      </div>
      <div className="w-full py-2 bg-slate-50 text-center text-slate-700 text-xs font-semibold">
        Copyright © 2022. All rights reserved.
      </div>
    </footer>
  );
}
