import express from 'express';
import { EducationController } from './education.controller';
import auth from '../../middleWares/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.post('/', auth(USER_ROLE.admin), EducationController.createEducation);

router.get('/', EducationController.getAllEducations);

router.get('/:id', EducationController.getSingleEducation);

router.delete(
  '/:id',
  auth(USER_ROLE.admin),
  EducationController.deleteEducation,
);
router.patch(
  '/:id',
  auth(USER_ROLE.admin),
  EducationController.updateEducation,
);

export const EducationRoutes = router;
