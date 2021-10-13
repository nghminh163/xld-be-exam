import en from '@/lang';
import { Response } from 'express';

export const badRequest = (res: Response, message = en.BAD_REQUEST) => {
  res.status(400).send({
    statusCode: 400,
    message,
  });
};

export const notFound = (res: Response, message = en.WALLET_NOT_FOUND) => {
  res.status(404).send({
    statusCode: 404,
    message,
  });
};
export const success = (res: Response, data, message = en.SUCCESS) => {
  if (data) {
    res.json({
      statusCode: 200,
      message,
      data,
    });
  } else {
    res.json({
      statusCode: 200,
      message,
    });
  }
};
