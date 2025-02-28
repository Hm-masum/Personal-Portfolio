import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TLoginUser, TUser } from './user.interface';
import { User } from './user.model';
import { createToken } from './user.utils';
import config from '../../config';

const createUserIntoDB = async (payload: TUser) => {
  const existingUser = await User.findOne({ email: payload.email });
  if (existingUser) {
    throw new AppError(httpStatus.BAD_REQUEST, 'User is already exist');
  }

  const result = await User.create(payload);
  return result;
};

const loginUser = async (payload: TLoginUser) => {
  const user = await User.findOne({ email: payload.email }).select('+password');
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not Found! ');
  }

  // checking if the password is correct
  const matchedPassword = await User.isPasswordMatched(
    payload?.password,
    user?.password,
  );
  if (!matchedPassword) {
    throw new AppError(httpStatus.FORBIDDEN, 'Password do not matched! ');
  }

  // create token and sent to the client
  const jwtPayload = {
    id: user?._id,
    email: user?.email,
    role: user.role,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  return {
    accessToken,
  };
};

export const UserService = {
  createUserIntoDB,
  loginUser,
};
