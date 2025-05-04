import BlogCard from "@/components/module/Blogs/BlogCard";
import { getAllBlog } from "@/services/Blog";
import { IBlog } from "@/type/blog";

const BlogsPage = async () => {
  const { data: blogs } = await getAllBlog();
  return (
    <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {blogs.map((blog: IBlog, idx: string) => (
        <BlogCard key={idx} blog={blog} />
      ))}
    </div>
  );
};

export default BlogsPage;
