import AppError from '../../errors/AppError';
import httpStatus from 'http-status';

import { Message } from './message.model';
import { TMessage } from './message.interface';

const createMessageIntoDB = async (payload: TMessage) => {
  const result = await Message.create(payload);
  return result;
};

const getAllMessageFromDB = async () => {
  const result = await Message.find();
  return result;
};

const getSingleMessageFromDB = async (id: string) => {
  const result = await Message.findById(id);
  return result;
};

const deleteMessageIntoDB = async (id: string) => {
  const isMessageExist = await Message.findById(id);
  if (!isMessageExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Message is not found');
  }

  const result = await Message.findByIdAndDelete(id, { new: true });
  return result;
};

export const MessageService = {
  createMessageIntoDB,
  getAllMessageFromDB,
  getSingleMessageFromDB,
  deleteMessageIntoDB,
};
