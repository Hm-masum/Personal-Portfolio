import { Button } from "@/components/ui/button";
import { IProject } from "@/type/project";
import Image from "next/image";
import Link from "next/link";

const ProjectDetails = ({ project }: { project: IProject }) => {
  console.log(project);
  return (
    <div className="md:w-3/4 bg-zinc-900 shadow-lg rounded-lg mx-auto p-6">
      <h2 className="text-center text-2xl md:text-4xl text-yellow-500 font-semibold my-5">
        {project?.title}
      </h2>
      <figure className="mb-5">
        <Image
          src={project?.image || "/default-image.png"}
          width={600}
          height={100}
          alt="blog image"
          className="rounded-lg w-full object-cover"
        />
      </figure>
      <div className="text-white space-y-3">
        <div className="space-y-1">
          <h2 className="font-semibold text-xl">Introduction :</h2>
          <p className="text-gray-400">{project.description}</p>
        </div>

        <div className="space-y-1">
          <h2 className="font-semibold text-xl">Features :</h2>
          <div className="text-gray-400">
            {project.features.map((feature, idx) => (
              <p key={idx} className="space-x-1">
                {idx + 1} {feature}
              </p>
            ))}
          </div>
        </div>

        <div className="space-y-1">
          <h2 className="font-semibold text-xl">Technologies :</h2>
          <div className="text-gray-400">
            {project.technologies.map((technology, idx) => (
              <p key={idx} className="space-x-1">
                {idx + 1} {technology}
              </p>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link href={project.frontEndRepo}>
            <Button className="h-10 font-semibold rounded-md bg-yellow-500 text-white hover:bg-black hover:text-white">
              FrontEnd
            </Button>
          </Link>
          <Link href={project.backEndRepo}>
            <Button className="h-10 font-semibold rounded-md bg-yellow-500 text-white hover:bg-black hover:text-white">
              BackEnd
            </Button>
          </Link>
          <Link href={project.liveLink}>
            <Button className="h-10 font-semibold rounded-md bg-yellow-500 text-white hover:bg-black hover:text-white">
              Live
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
