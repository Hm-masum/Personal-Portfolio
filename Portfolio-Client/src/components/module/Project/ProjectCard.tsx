import { Button } from "@/components/ui/button";
import { IProject } from "@/type/project";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }: { project: IProject }) => {
  return (
    <div className="rounded-lg w-full bg-zinc-900 space-y-3 shadow-xl">
      <figure>
        <Image
          src={project.image || "/default-image.png"}
          width={600}
          height={100}
          alt="project image"
          className="rounded-t-lg h-52 object-cover"
        />
      </figure>
      <div className="p-6 space-y-3">
        <h2 className="text-2xl font-semibold text-yellow-500">
          {project.title}
        </h2>

        <p className="text-gray-400">
          {project.description.length > 150
            ? project.description.slice(0, 100) + "..."
            : project.description}
          <Link
            href={`/projects/${project._id}`}
            className="text-yellow-500 ml-1"
          >
            Read More
          </Link>
        </p>

        <div className="flex justify-end">
          <Link href={project.liveLink}>
            <Button className="h-10 font-semibold rounded-md bg-yellow-600 text-white hover:bg-black hover:text-white">
              Visit Project
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
