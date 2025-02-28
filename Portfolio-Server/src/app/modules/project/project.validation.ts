import { z } from 'zod';

const createProjectValidationSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title is required' }),
    description: z.string({ required_error: 'Content is required' }),
    image: z.string({ required_error: 'Project image is required' }),
    frontEndRepo: z.string({
      required_error: 'FrontEnd github Repo is required',
    }),
    backEndRepo: z.string({
      required_error: 'BackEnd github Repo is required',
    }),
    liveLink: z.string({ required_error: 'live Link github Repo is required' }),
  }),
});

const updateProjectValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    frontEndRepo: z.string().optional(),
    backEndRepo: z.string().optional(),
    liveLink: z.string().optional(),
  }),
});

export const ProjectValidation = {
  createProjectValidationSchema,
  updateProjectValidationSchema,
};
