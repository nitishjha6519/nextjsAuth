"use client";

import { useRouter } from "next/navigation";
// import About from "pages/profile/about";
// import Navbar from "src/components/profile/Navbar";
// import Sidebar from "src/components/profile/Sidebar";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Sidebar = dynamic(() => import("../profile/Sidebar"), {
  ssr: false,
});
const Navbar = dynamic(() => import("../profile/Navbar"), {
  ssr: false,
});

// import { ThemeProvider } from "next-themes";

function MyProfile({ children }: any) {
  const router = useRouter();

  return (
    // <ThemeProvider attribute="class">

    <div className="min-h-screen bg-hero-pattern bg-[51%_38%] ">
      <div className="w-full md:flex md:items-center md:justify-center min-h-screen lg:flex-row gap-6  lg:mb-0 md:mb-8 sm:px-20 md:px-8 lg:px-36 xl:px-48 ">
        <div className="w-full md:w-1/4 p-4 text-base text-center bg-white dark:bg-dark-500 md:rounded-2xl ">
          <Sidebar />
        </div>
        <div className=" w-full flex flex-col md:w-3/4 overflow-hidden bg-white md:rounded-2xl dark:bg-dark-500">
          <Navbar />
          {children}
        </div>
      </div>
    </div>

    // </ThemeProvider>
  );
}

export default MyProfile;
