import { UserController } from './user.controller';
import express from 'express';

const router = express.Router();

router.post('/register', UserController.createUser);
router.post('/login', UserController.loginUser);

export const UserRoutes = router;
