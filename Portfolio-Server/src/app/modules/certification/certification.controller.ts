import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { CertificationService } from './certification.service';

const createCertification = catchAsync(async (req, res) => {
  const result = await CertificationService.createCertificationIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Certification created successfully',
    data: result,
  });
});

const getAllCertifications = catchAsync(async (req, res) => {
  const result = await CertificationService.getAllCertificationsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Certifications fetched successfully',
    data: result,
  });
});

const getSingleCertification = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CertificationService.getSingleCertificationFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Certification fetched successfully',
    data: result,
  });
});

const updateCertification = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CertificationService.updateCertificationFromDB(
    id,
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Certification updated successfully',
    data: result,
  });
});

const deleteCertification = catchAsync(async (req, res) => {
  const { id } = req.params;
  await CertificationService.deleteCertificationIntoDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Certification deleted successfully',
    data: [],
  });
});

export const CertificationController = {
  createCertification,
  getAllCertifications,
  getSingleCertification,
  updateCertification,
  deleteCertification,
};
