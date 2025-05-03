import UpdateSkillForm from "@/components/module/Skill/UpdateSkillForm";
import { getSingleSkill } from "@/services/Skill";

const UpdateSkillPage = async ({
  params,
}: {
  params: Promise<{ skillId: string }>;
}) => {
  const { skillId } = await params;
  const { data: skillData } = await getSingleSkill(skillId);

  return (
    <div className="flex items-center justify-center">
      <UpdateSkillForm skillData={skillData} />
    </div>
  );
};
export default UpdateSkillPage;
