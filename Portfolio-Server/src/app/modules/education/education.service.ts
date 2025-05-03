import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import { TEducation } from './education.interface';
import { Education } from './education.model';

const createEducationIntoDB = async (payload: TEducation) => {
  const result = await Education.create(payload);
  return result;
};

const getSingleEducationFromDB = async (id: string) => {
  const result = await Education.findById(id);
  return result;
};

const getAllEducationsFromDB = async () => {
  const result = await Education.find();
  return result;
};

const updateEducationFromDB = async (
  id: string,
  payload: Partial<TEducation>,
) => {
  const isEducationExist = await Education.findById(id);
  if (!isEducationExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Education is not found');
  }

  const result = await Education.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteEducationIntoDB = async (id: string) => {
  const isEducationExist = await Education.findById(id);
  if (!isEducationExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Education is not found');
  }

  const result = await Education.findByIdAndDelete(id, { new: true });
  return result;
};

export const EducationService = {
  createEducationIntoDB,
  getSingleEducationFromDB,
  getAllEducationsFromDB,
  updateEducationFromDB,
  deleteEducationIntoDB,
};
