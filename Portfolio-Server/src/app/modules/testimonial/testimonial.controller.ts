import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { TestimonialService } from './testimonial.service';

const createTestimonial = catchAsync(async (req, res) => {
  const result = await TestimonialService.createTestimonialIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Testimonial created successfully',
    data: result,
  });
});

const getAllTestimonials = catchAsync(async (req, res) => {
  const result = await TestimonialService.getAllTestimonialsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Testimonials fetched successfully',
    data: result,
  });
});

const getSingleTestimonial = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await TestimonialService.getSingleTestimonialFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Testimonial fetched successfully',
    data: result,
  });
});

const updateTestimonial = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await TestimonialService.updateTestimonialFromDB(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Testimonial updated successfully',
    data: result,
  });
});

const deleteTestimonial = catchAsync(async (req, res) => {
  const { id } = req.params;
  await TestimonialService.deleteTestimonialIntoDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Testimonial deleted successfully',
    data: [],
  });
});

export const TestimonialController = {
  createTestimonial,
  getAllTestimonials,
  getSingleTestimonial,
  updateTestimonial,
  deleteTestimonial,
};
