import ProjectDetails from "@/components/module/Project/ProjectDetails";
import { getSingleProject } from "@/services/Project";

const ProjectDetailsPage = async ({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) => {
  const { projectId } = await params;
  const { data: project } = await getSingleProject(projectId);

  return (
    <div>
      <ProjectDetails project={project} />
    </div>
  );
};

export default ProjectDetailsPage;
