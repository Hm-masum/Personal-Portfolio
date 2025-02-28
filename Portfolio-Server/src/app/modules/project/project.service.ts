import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import { TProject } from './project.interface';
import { Project } from './project.model';

const createProjectIntoDB = async (payload: TProject) => {
  const result = await Project.create(payload);
  return result;
};

const getAllProjectFromDB = async () => {
  const result = await Project.find();
  return result;
};

const getSingleProjectFromDB = async (id: string) => {
  const result = await Project.findById(id);
  return result;
};

const updateProjectFromDB = async (id: string, payload: Partial<TProject>) => {
  const isProjectExist = await Project.findById(id);
  if (!isProjectExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Project is not found');
  }

  const result = await Project.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteProjectIntoDB = async (id: string) => {
  const isProjectExist = await Project.findById(id);
  if (!isProjectExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Project is not found');
  }

  const result = await Project.findByIdAndDelete(id, { new: true });
  return result;
};

export const ProjectService = {
  createProjectIntoDB,
  getAllProjectFromDB,
  getSingleProjectFromDB,
  updateProjectFromDB,
  deleteProjectIntoDB,
};
