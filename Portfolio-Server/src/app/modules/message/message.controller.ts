import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { MessageService } from './message.service';

const createMessage = catchAsync(async (req, res) => {
  const result = await MessageService.createMessageIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Message created successfully',
    data: result,
  });
});

const getAllMessages = catchAsync(async (req, res) => {
  const result = await MessageService.getAllMessageFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Messages fetched successfully',
    data: result,
  });
});

const getSingleMessage = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await MessageService.getSingleMessageFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Message fetched successfully',
    data: result,
  });
});

const deleteMessage = catchAsync(async (req, res) => {
  const { id } = req.params;
  await MessageService.deleteMessageIntoDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Message deleted successfully',
    data: [],
  });
});

export const MessageController = {
  createMessage,
  getAllMessages,
  getSingleMessage,
  deleteMessage,
};
