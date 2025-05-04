import { getAllEducation } from "@/services/Education";
import { IEducation } from "@/type/education";
import { Calendar } from "lucide-react";
import { TiLocationOutline } from "react-icons/ti";

const Education = async () => {
  const { data: educationData } = await getAllEducation();
  return (
    <div className="my-12 space-y-10">
      <h2 className="text-2xl md:text-4xl font-semibold text-center text-yellow-500">
        Education
      </h2>
      <div className="flex gap-5 justify-center">
        <div className="flex flex-col items-center mt-3">
          <p className="h-3 w-3 rounded-full bg-yellow-500"></p>
          <p className="border-l border-yellow-500 h-[190px] md:h-32"></p>
          <p className="h-3 w-3 rounded-full bg-yellow-500"></p>
          <p className="border-l border-yellow-500 h-[190px] md:h-32"></p>
          <p className="h-3 w-3 rounded-full bg-yellow-500"></p>
        </div>

        <div className="space-y-6">
          {educationData.map((education: IEducation, idx: string) => (
            <div key={idx} className="space-y-1 text-white">
              <h2 className="text-2xl font-semibold">{education.degree}</h2>
              <p>{education.institution}</p>
              <p className="flex items-center gap-1">
                <TiLocationOutline className="text-xl text-yellow-500" />
                {education.location}
              </p>
              <p className="flex items-center gap-2">
                <Calendar className="text-yellow-500" />
                {education.educationYear}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
