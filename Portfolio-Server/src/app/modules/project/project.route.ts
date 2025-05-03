import express from 'express';
import validateRequest from '../../middleWares/validateRequest';
import { ProjectValidation } from './project.validation';
import { projectController } from './project.controller';
import auth from '../../middleWares/auth';
import { USER_ROLE } from '../user/user.constant';
const router = express.Router();

router.post(
  '/',
  auth(USER_ROLE.admin),
  validateRequest(ProjectValidation.createProjectValidationSchema),
  projectController.createProject,
);

router.get('/', projectController.getAllProjects);

router.get('/:id', projectController.getSingleProject);

router.delete('/:id', auth(USER_ROLE.admin), projectController.deleteProject);

router.patch(
  '/:id',
  auth(USER_ROLE.admin),
  validateRequest(ProjectValidation.updateProjectValidationSchema),
  projectController.updateProject,
);

export const ProjectRoutes = router;
