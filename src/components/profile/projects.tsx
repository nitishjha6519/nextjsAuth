"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectsNavbar from "./ProjectsNavbar";
import { projects as projectsData } from "../../utilities/constants";
import { Category } from "../../utilities/types";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");

  const handlerFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newArray);
    setActive(category);
  };

  return (
    <div
      className="px-1 md:px-4 py-2 overflow-y-scroll"
      style={{ height: "75vh" }}
    >
      <ProjectsNavbar
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />

      <div className="relative grid grid-cols-12 gap-4 my-3">
        {projects.map((project, i) => (
          <div
            key={i}
            className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-12"
          >
            <ProjectCard project={project} key={project.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
