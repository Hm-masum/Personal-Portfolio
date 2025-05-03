import { model, Schema } from 'mongoose';

import { TTestimonial } from './testimonial.interface';

const testimonialSchema = new Schema<TTestimonial>({
  name: { type: String, required: true },
  image: { type: String, required: true },
  designation: { type: String, required: true },
  description: { type: String, required: true },
  ratings: { type: String, required: true },
});

export const Testimonial = model<TTestimonial>(
  'Testimonial',
  testimonialSchema,
);
