import { getAllSkills } from "@/services/Skill";
import { ISkill } from "@/type/skill";
import Image from "next/image";

const SkillCard = async () => {
  const { data: skillCard } = await getAllSkills();

  return (
    <div className="my-12 space-y-10">
      <h2 className="text-2xl md:text-4xl font-semibold text-center text-yellow-500">
        Skills
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center justify-center gap-6">
        {skillCard.map((skill: ISkill, idx: string) => (
          <div
            key={idx}
            className="bg-zinc-900 py-8 rounded-xl flex flex-col items-center justify-center space-y-3"
          >
            <Image
              width={100}
              height={100}
              className="w-[75px] h-[60px] md:h-[70px]"
              src={skill.image}
              alt=""
            />
            <p className="font-semibold text-white">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
