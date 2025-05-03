import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import { TCertification } from './certification.interface';
import { Certification } from './certification.model';

const createCertificationIntoDB = async (payload: TCertification) => {
  const result = await Certification.create(payload);
  return result;
};

const getSingleCertificationFromDB = async (id: string) => {
  const result = await Certification.findById(id);
  return result;
};

const getAllCertificationsFromDB = async () => {
  const result = await Certification.find();
  return result;
};

const updateCertificationFromDB = async (
  id: string,
  payload: Partial<TCertification>,
) => {
  const isCertificationExist = await Certification.findById(id);
  if (!isCertificationExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Certification is not found');
  }

  const result = await Certification.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteCertificationIntoDB = async (id: string) => {
  const isCertificationExist = await Certification.findById(id);
  if (!isCertificationExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Certification is not found');
  }

  const result = await Certification.findByIdAndDelete(id, { new: true });
  return result;
};

export const CertificationService = {
  createCertificationIntoDB,
  getAllCertificationsFromDB,
  getSingleCertificationFromDB,
  updateCertificationFromDB,
  deleteCertificationIntoDB,
};
