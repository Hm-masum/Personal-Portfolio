import UpdateProjectForm from "@/components/module/Project/UpdateProjectForm";
import { getSingleProject } from "@/services/Project";

const UpdateProjectPage = async ({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) => {
  const { projectId } = await params;
  const { data: projectData } = await getSingleProject(projectId);

  return (
    <div className="flex items-center justify-center">
      <UpdateProjectForm projectData={projectData} />
    </div>
  );
};

export default UpdateProjectPage;
