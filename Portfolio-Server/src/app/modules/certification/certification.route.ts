import express from 'express';
import { CertificationController } from './certification.controller';
import auth from '../../middleWares/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.post(
  '/',
  auth(USER_ROLE.admin),
  CertificationController.createCertification,
);

router.get('/', CertificationController.getAllCertifications);

router.get('/:id', CertificationController.getSingleCertification);

router.delete(
  '/:id',
  auth(USER_ROLE.admin),
  CertificationController.deleteCertification,
);

router.patch(
  '/:id',
  auth(USER_ROLE.admin),
  CertificationController.updateCertification,
);

export const CertificationRoutes = router;
