import auth from '../../middleWares/auth';
import { USER_ROLE } from './user.constant';
import { UserController } from './user.controller';
import express from 'express';

const router = express.Router();

router.post('/register', UserController.createUser);
router.post('/login', UserController.loginUser);
router.post('/refresh-token', UserController.refreshToken);
router.get('/me', auth(USER_ROLE.admin), UserController.getMe);
export const UserRoutes = router;
