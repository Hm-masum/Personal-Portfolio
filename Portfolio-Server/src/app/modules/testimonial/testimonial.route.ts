import express from 'express';
import { TestimonialController } from './testimonial.controller';
import auth from '../../middleWares/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.post(
  '/',
  auth(USER_ROLE.admin),
  TestimonialController.createTestimonial,
);
router.get('/', TestimonialController.getAllTestimonials);

router.get('/:id', TestimonialController.getSingleTestimonial);

router.delete(
  '/:id',
  auth(USER_ROLE.admin),
  TestimonialController.deleteTestimonial,
);
router.patch(
  '/:id',
  auth(USER_ROLE.admin),
  TestimonialController.updateTestimonial,
);

export const TestimonialRoutes = router;
