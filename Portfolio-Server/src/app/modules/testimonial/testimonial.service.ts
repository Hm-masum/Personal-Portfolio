import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import { Testimonial } from './testimonial.modal';
import { TTestimonial } from './testimonial.interface';

const createTestimonialIntoDB = async (payload: TTestimonial) => {
  const result = await Testimonial.create(payload);
  return result;
};

const getAllTestimonialsFromDB = async () => {
  const result = await Testimonial.find();
  return result;
};

const getSingleTestimonialFromDB = async (id: string) => {
  const result = await Testimonial.findById(id);
  return result;
};

const updateTestimonialFromDB = async (
  id: string,
  payload: Partial<TTestimonial>,
) => {
  const isTestimonialExist = await Testimonial.findById(id);
  if (!isTestimonialExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Testimonial is not found');
  }

  const result = await Testimonial.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteTestimonialIntoDB = async (id: string) => {
  const isTestimonialExist = await Testimonial.findById(id);
  if (!isTestimonialExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Testimonial is not found');
  }

  const result = await Testimonial.findByIdAndDelete(id, { new: true });
  return result;
};

export const TestimonialService = {
  createTestimonialIntoDB,
  getAllTestimonialsFromDB,
  getSingleTestimonialFromDB,
  updateTestimonialFromDB,
  deleteTestimonialIntoDB,
};
