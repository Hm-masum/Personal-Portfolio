import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { EducationService } from './education.service';

const createEducation = catchAsync(async (req, res) => {
  const result = await EducationService.createEducationIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Education created successfully',
    data: result,
  });
});

const getAllEducations = catchAsync(async (req, res) => {
  const result = await EducationService.getAllEducationsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Educations fetched successfully',
    data: result,
  });
});

const getSingleEducation = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await EducationService.getSingleEducationFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Education fetched successfully',
    data: result,
  });
});

const updateEducation = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await EducationService.updateEducationFromDB(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Education updated successfully',
    data: result,
  });
});

const deleteEducation = catchAsync(async (req, res) => {
  const { id } = req.params;
  await EducationService.deleteEducationIntoDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Education deleted successfully',
    data: [],
  });
});

export const EducationController = {
  createEducation,
  getAllEducations,
  getSingleEducation,
  updateEducation,
  deleteEducation,
};
