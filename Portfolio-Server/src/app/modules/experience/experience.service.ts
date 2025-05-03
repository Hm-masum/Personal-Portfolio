import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import { TExperience } from './experience.interface';
import { Experience } from './experience.model';

const createExperienceIntoDB = async (payload: TExperience) => {
  const result = await Experience.create(payload);
  return result;
};

const getSingleExperienceFromDB = async (id: string) => {
  const result = await Experience.findById(id);
  return result;
};

const getAllExperiencesFromDB = async () => {
  const result = await Experience.find();
  return result;
};

const updateExperienceFromDB = async (
  id: string,
  payload: Partial<TExperience>,
) => {
  const isExperienceExist = await Experience.findById(id);
  if (!isExperienceExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Experience is not found');
  }

  const result = await Experience.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteExperienceIntoDB = async (id: string) => {
  const isExperienceExist = await Experience.findById(id);
  if (!isExperienceExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Experience is not found');
  }

  const result = await Experience.findByIdAndDelete(id, { new: true });
  return result;
};

export const ExperienceService = {
  createExperienceIntoDB,
  getAllExperiencesFromDB,
  getSingleExperienceFromDB,
  updateExperienceFromDB,
  deleteExperienceIntoDB,
};
