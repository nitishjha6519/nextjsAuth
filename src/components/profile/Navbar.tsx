"use client";

import { useState, useEffect, FunctionComponent } from "react";
import { usePathname } from "next/navigation";

import NavItem from "./NavItem";
const Navbar = () => {
  const pathname = usePathname();

  const [active, setActive] = useState("");

  //later
  useEffect(() => {
    if (pathname === "/profile") setActive("About");
    else if (pathname === "/profile/projects") setActive("Projects");
    else if (pathname === "/profile/resume") setActive("Resume");
  }, []);

  return (
    <div className="flex items-center justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold border-b-4 md:text-2xl border-green">
        {/* {active == "" ? "About" : active} */}
        {active}
      </span>

      <div className="text-base font-normal md:text-xl">
        {/* {active == "" ? null : (
          <NavItem
            active={active}
            setActive={setActive}
            name="About"
            route="/profile"
          />
        )}
        <NavItem
          active={active}
          setActive={setActive}
          name="Resume"
          route="/profile/resume"
        /> 
        <NavItem
          active={active}
          setActive={setActive}
          name="Projects"
          route="/profile/projects"
        />*/}
      </div>
    </div>
  );
};

export default Navbar;
