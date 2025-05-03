import express from 'express';
import { ExperienceController } from './experience.controller';
import auth from '../../middleWares/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.post('/', auth(USER_ROLE.admin), ExperienceController.createExperience);

router.get('/', ExperienceController.getAllExperiences);

router.get('/:id', ExperienceController.getSingleExperience);

router.delete(
  '/:id',
  auth(USER_ROLE.admin),
  ExperienceController.deleteExperience,
);

router.patch(
  '/:id',
  auth(USER_ROLE.admin),
  ExperienceController.updateExperience,
);

export const ExperienceRoutes = router;
