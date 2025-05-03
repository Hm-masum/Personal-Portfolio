import { getAllSkills } from "@/services/Skill";
import { ISkill } from "@/type/skill";
import Image from "next/image";

const SkillCard = async () => {
  const { data: skillCard } = await getAllSkills();

  return (
    <div>
      {skillCard.map((skill: ISkill, idx: string) => (
        <div
          key={idx}
          className="bg-zinc-900 py-8 rounded-xl flex flex-col items-center justify-center space-y-3"
        >
          <Image width={100} height={100} src={skill.image} alt="" />
          <p className="font-semibold text-white">{skill.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SkillCard;
