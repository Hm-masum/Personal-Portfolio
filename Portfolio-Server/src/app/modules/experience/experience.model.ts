import { model, Schema } from 'mongoose';
import { TExperience } from './experience.interface';

const experienceSchema = new Schema<TExperience>({
  designation: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  experienceYear: { type: String, required: true },
});

export const Experience = model<TExperience>('Experience', experienceSchema);
