import { model, Schema } from 'mongoose';
import { TProject } from './project.interface';

const projectSchema = new Schema<TProject>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    features: { type: [String], required: true },
    technologies: { type: [String], required: true },
    frontEndRepo: { type: String, required: true },
    backEndRepo: { type: String, required: true },
    liveLink: { type: String, required: true },
    showHome: { type: String, enum: ['yes', 'no'] },
  },
  {
    timestamps: true,
  },
);

export const Project = model<TProject>('Project', projectSchema);
