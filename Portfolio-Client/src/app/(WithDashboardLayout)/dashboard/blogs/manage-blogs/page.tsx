import ManageBlog from "@/components/module/Blogs/ManageBlog";
import { getAllBlog } from "@/services/Blog";

const ManageBlogsPage = async () => {
  const { data: blogData } = await getAllBlog();
  return (
    <div>
      <ManageBlog blogs={blogData} />
    </div>
  );
};

export default ManageBlogsPage;
