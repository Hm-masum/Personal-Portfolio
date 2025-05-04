import ProjectCard from "@/components/module/Project/ProjectCard";
import { getAllProject } from "@/services/Project";
import { IProject } from "@/type/project";

const ProjectsPage = async () => {
  const { data: projects } = await getAllProject();
  return (
    <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {projects.map((project: IProject, idx: string) => (
        <ProjectCard key={idx} project={project} />
      ))}
    </div>
  );
};

export default ProjectsPage;
