import ManageEducation from "@/components/module/Education/ManageEducation";
import { getAllEducation } from "@/services/Education";

const ManageEducationPage = async () => {
  const { data: educationData } = await getAllEducation();
  return (
    <div>
      <ManageEducation educations={educationData} />
    </div>
  );
};

export default ManageEducationPage;
