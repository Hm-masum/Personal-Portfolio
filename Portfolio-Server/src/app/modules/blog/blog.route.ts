import express from 'express';
import validateRequest from '../../middleWares/validateRequest';
import { blogValidation } from './blog.validation';
import { blogController } from './blog.controller';
import auth from '../../middleWares/auth';
import { USER_ROLE } from '../user/user.constant';
const router = express.Router();

router.post(
  '/',
  auth(USER_ROLE.admin),
  validateRequest(blogValidation.createBlogValidationSchema),
  blogController.createBlog,
);

router.get('/', blogController.getAllBlogs);
router.get('/:id', blogController.getSingleBlog);

router.delete('/:id', auth(USER_ROLE.admin), blogController.deleteBlog);

router.patch(
  '/:id',
  auth(USER_ROLE.admin),
  validateRequest(blogValidation.updateBlogValidationSchema),
  blogController.updateBlog,
);

export const BlogRoutes = router;
