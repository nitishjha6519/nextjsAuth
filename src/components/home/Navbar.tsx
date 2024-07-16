import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <nav className="relative bg-transparent text-center px-1 py-4">
        <span className="hover:opacity-80 user-select-none text-white mt-2 absolute left-0 md:">
          <Link
            href="/"
            className="px-1 text-2xl font-extrabold  border-white leading-5 "
          >
            <span> kollab</span>
            {/* <span className="hidden sm:contents">ollab</span> */}
          </Link>
          <Link
            href="/"
            className="px-1 text-2xl font-extrabold border-s-4 border-white leading-5"
          >
            <span>ship</span>
            <span className="text-xs ms-1">®</span>
          </Link>
        </span>

        <div className="absolute flex top-0 right-0 mt-3 me-1 sm:me-3">
          <Link
            href="/login"
            className="lg:block p-2 font-extrabold rounded-xl text-black hover:text-white bg-white hover:bg-transparent border-2 border-solid border-white transition-all ease-linear"
          >
            Log in
          </Link>
          <div className="hidden 1.5lg:block w-40"></div>
          <Link
            href="/workDescription"
            className=" text-white ms-2 block 1.5lg:fixed right-3 z-[1001] p-2 font-extrabold rounded-xl hover:text-red-500 bg-red-500 hover:bg-transparent border-2 border-solid border-red-500 hover:border-red-500 transition-all ease-linear"
          >
            Post <span className="hidden sm:contents">a remote</span> job
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
