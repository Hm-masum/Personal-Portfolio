import { model, Schema } from 'mongoose';
import { TSkill } from './skill.interface';

const skillSchema = new Schema<TSkill>({
  image: { type: String, required: true },
  types: { type: String },
  name: { type: String, required: true },
});

export const Skill = model<TSkill>('Skill', skillSchema);
