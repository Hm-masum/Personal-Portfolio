import express from 'express';
import validateRequest from '../../middleWares/validateRequest';
import { ProjectValidation } from './project.validation';
import { projectController } from './project.controller';
const router = express.Router();

router.post(
  '/',
  validateRequest(ProjectValidation.createProjectValidationSchema),
  projectController.createProject,
);

router.get('/', projectController.getAllProjects);
router.get('/:id', projectController.getSingleProject);

router.delete('/:id', projectController.deleteProject);

router.patch(
  '/:id',
  validateRequest(ProjectValidation.updateProjectValidationSchema),
  projectController.updateProject,
);

export const ProjectRoutes = router;
