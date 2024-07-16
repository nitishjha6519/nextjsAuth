"use client";

// import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";

// import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  // const { theme, setTheme } = useTheme();

  // const changeTheme = () => {
  //   setTheme(theme === "light" ? "dark" : "light");
  // };

  return (
    <>
      <Image
        // src="https://sumitdey.netlify.app/static/media/max.9d3a6d3e.jpg"
        src="https://media.istockphoto.com/id/1482759154/photo/think-big-with-creativity-concepts.webp?b=1&s=170667a&w=0&k=20&c=DY3F2JrZyBDvM2aC-R0TJIPOS1UZ4pX9y6WJBQzeCcQ="
        alt="avatar"
        className="mx-auto border rounded-full"
        height={128} // Use number instead of "128px"
        width={128} // Use number instead of "128px"
        layout="intrinsic"
        quality={100}
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green">First</span> Name
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Web Developer
      </p>
      {/* Resume */}
      {/* <Link href="/assets/Sumit Dey Resume.pdf" download="Sumit Dey Resume.pdf">
        <a className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500">
          <GiTie className="w-6 h-6" />
          <span>Download Resume</span>
        </a>
      </Link> */}

      {/* Socials */}
      {/* <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
        <Link href="https://www.youtube.com/channel/UClW8d1f5m0QAE_Ig024EP6A">
          <a>
            <AiFillYoutube className="w-8 h-8 cursor-pointer" />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/sumit-dey-4a04431a9/">
          <a>
            <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
          </a>
        </Link>
        <Link href="https://www.instagram.com/_sumax__/">
          <a>
            <AiFillGithub className="w-8 h-8 cursor-pointer" />
          </a>
        </Link>
      </div> */}

      {/* Contacts */}
      {/* <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span>Kolkata, India</span>
        </div>
        <p className="my-2">code.sumax@gmail.com</p>
        <p className="my-2">8514961665 / 8640960375</p>
      </div> */}

      {/* Email Button */}
      {/* <button
        className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none"
        onClick={() => window.open("mailto:code.sumax@gmail.com")}
      >
        Email me
      </button>
      <button
        // onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 focus:outline-none hover:scale-105"
      >
        Toggle Theme
      </button> */}
    </>
  );
};

export default Sidebar;
