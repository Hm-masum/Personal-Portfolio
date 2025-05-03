import ManageProjects from "@/components/module/Project/ManageProjects";
import { getAllProject } from "@/services/Project";

const ManageProjectsPage = async () => {
  const { data: projectData } = await getAllProject();
  return (
    <div>
      <ManageProjects projects={projectData} />
    </div>
  );
};

export default ManageProjectsPage;
