import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { SkillService } from './skill.service';

const createSkill = catchAsync(async (req, res) => {
  const result = await SkillService.createSkillIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill created successfully',
    data: result,
  });
});

const getAllSkills = catchAsync(async (req, res) => {
  const result = await SkillService.getAllSkillsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skills fetched successfully',
    data: result,
  });
});

const getSingleSkill = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await SkillService.getSingleSkillFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill fetched successfully',
    data: result,
  });
});

const updateSkill = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await SkillService.updateSkillFromDB(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill updated successfully',
    data: result,
  });
});

const deleteSkill = catchAsync(async (req, res) => {
  const { id } = req.params;
  await SkillService.deleteSkillIntoDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill deleted successfully',
    data: [],
  });
});

export const SkillController = {
  createSkill,
  getAllSkills,
  getSingleSkill,
  updateSkill,
  deleteSkill,
};
