import { model, Schema } from 'mongoose';
import { TCertification } from './certification.interface';

const certificationSchema = new Schema<TCertification>({
  image: { type: String, required: true },
  title: { type: String, required: true },
  achievements: { type: [String] },
});

export const Certification = model<TCertification>(
  'Certification',
  certificationSchema,
);
