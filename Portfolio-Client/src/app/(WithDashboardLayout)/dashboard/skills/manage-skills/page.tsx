import ManageSkills from "@/components/module/Skill/ManageSkills";
import { getAllSkills } from "@/services/Skill";

const ManageSkillsPage = async () => {
  const { data: skillsData } = await getAllSkills();
  return (
    <div>
      <ManageSkills skills={skillsData} />
    </div>
  );
};

export default ManageSkillsPage;
