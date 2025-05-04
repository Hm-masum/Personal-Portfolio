import { IBlog } from "@/type/blog";
import { Calendar } from "lucide-react";
import Image from "next/image";

const BlogDetails = ({ blog }: { blog: IBlog }) => {
  return (
    <div className="md:w-3/4 bg-zinc-900 shadow-lg rounded-lg mx-auto p-6">
      <p className="flex items-center justify-center mx-auto text-yellow-500 bg-yellow-100/20 w-fit px-3 py-1 rounded-full">
        <Calendar className="mr-2" />
        {blog.createdAt
          ? new Date(blog.createdAt).toLocaleDateString()
          : "Unknown Date"}
      </p>
      <h2 className="text-center text-2xl md:text-4xl text-yellow-500 font-semibold my-5">
        {blog.title}
      </h2>
      <div className="flex items-center justify-center bg-yellow-100/20 mb-5 py-2 rounded-lg gap-4">
        <Image
          src={
            blog.authorImage ||
            "https://cdn-icons-png.flaticon.com/512/219/219986.png"
          }
          width={30}
          height={30}
          className="rounded-full"
          alt="author image"
        />

        <span className="text-lg text-yellow-500 font-medium">
          {blog.authorName}
        </span>
      </div>

      <figure className="mb-5">
        <Image
          src={blog?.image || "/default-image.png"}
          width={600}
          height={100}
          alt="blog image"
          className="rounded-lg w-full object-cover"
        />
      </figure>

      <div className="flex items-center gap-2">
        {blog.tags.map((tag, idx) => (
          <p
            key={idx}
            className="bg-yellow-100/20 text-yellow-500 p-2 rounded-2xl"
          >
            #{tag}
          </p>
        ))}
      </div>

      <div className="text-xl md:text-2xl my-2 leading-relaxed">
        <p className=" text-white">{blog.subtitle}</p>
      </div>
      <div className="text-lg">
        <p className="text-gray-400">{blog.description}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
