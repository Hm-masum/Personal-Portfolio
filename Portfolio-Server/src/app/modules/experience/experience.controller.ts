import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ExperienceService } from './experience.service';

const createExperience = catchAsync(async (req, res) => {
  const result = await ExperienceService.createExperienceIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Experience created successfully',
    data: result,
  });
});

const getAllExperiences = catchAsync(async (req, res) => {
  const result = await ExperienceService.getAllExperiencesFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Experiences fetched successfully',
    data: result,
  });
});

const getSingleExperience = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ExperienceService.getSingleExperienceFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Experience fetched successfully',
    data: result,
  });
});

const updateExperience = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ExperienceService.updateExperienceFromDB(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Experience updated successfully',
    data: result,
  });
});

const deleteExperience = catchAsync(async (req, res) => {
  const { id } = req.params;
  await ExperienceService.deleteExperienceIntoDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Experience deleted successfully',
    data: [],
  });
});

export const ExperienceController = {
  createExperience,
  getAllExperiences,
  getSingleExperience,
  updateExperience,
  deleteExperience,
};
