import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import { TSkill } from './skill.interface';
import { Skill } from './skill.model';

const createSkillIntoDB = async (payload: TSkill) => {
  const result = await Skill.create(payload);
  return result;
};

const getAllSkillsFromDB = async () => {
  const result = await Skill.find();
  return result;
};

const getSingleSkillFromDB = async (id: string) => {
  const result = await Skill.findById(id);
  return result;
};

const updateSkillFromDB = async (id: string, payload: Partial<TSkill>) => {
  const isSkillExist = await Skill.findById(id);
  if (!isSkillExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Skill is not found');
  }

  const result = await Skill.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteSkillIntoDB = async (id: string) => {
  const isSkillExist = await Skill.findById(id);
  if (!isSkillExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Skill is not found');
  }

  const result = await Skill.findByIdAndDelete(id, { new: true });
  return result;
};

export const SkillService = {
  createSkillIntoDB,
  getAllSkillsFromDB,
  getSingleSkillFromDB,
  updateSkillFromDB,
  deleteSkillIntoDB,
};
