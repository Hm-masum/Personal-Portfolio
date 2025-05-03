import { TBlog } from './blog.interface';
import { Blog } from './blog.model';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import { User } from '../user/user.model';

const createBlogIntoDB = async (payload: TBlog, id: string) => {
  const user = await User.findById({ _id: id });
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User is not found');
  }

  payload.authorName = user?.name;
  payload.email = user?.email;
  payload.authorImage = user?.image;

  const result = await Blog.create(payload, id);
  return result;
};

const getAllBlogsFromDB = async () => {
  const result = await Blog.find();
  return result;
};

const getSingleBlogFromDB = async (id: string) => {
  const result = await Blog.findById(id);
  return result;
};

const updateBlogFromDB = async (id: string, payload: Partial<TBlog>) => {
  const isBlogExist = await Blog.findById(id);
  if (!isBlogExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Blog is not found');
  }

  const result = await Blog.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteBlogIntoDB = async (id: string) => {
  const isBlogExist = await Blog.findById(id);
  if (!isBlogExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Blog is not found');
  }

  const result = await Blog.findByIdAndDelete(id, { new: true });
  return result;
};

export const BlogService = {
  createBlogIntoDB,
  getAllBlogsFromDB,
  getSingleBlogFromDB,
  updateBlogFromDB,
  deleteBlogIntoDB,
};
