import express from 'express';
import { SkillController } from './skill.controller';
import auth from '../../middleWares/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.post('/', auth(USER_ROLE.admin), SkillController.createSkill);
router.get('/', SkillController.getAllSkills);

router.get('/:id', SkillController.getSingleSkill);

router.delete('/:id', auth(USER_ROLE.admin), SkillController.deleteSkill);
router.patch('/:id', auth(USER_ROLE.admin), SkillController.updateSkill);

export const SkillRoutes = router;
