import { IProject } from "@/type/project";
import React from "react";
import ProjectCard from "../Project/ProjectCard";
import { getAllProject } from "@/services/Project";

const BestProjects = async () => {
  const { data } = await getAllProject();
  const projects = data.filter(
    (project: IProject) => project.showHome === "yes"
  );
  return (
    <div className="my-12 space-y-10">
      <h2 className="text-2xl md:text-4xl font-semibold text-center text-yellow-500">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project: IProject, idx: string) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </div>
  );
};

export default BestProjects;
