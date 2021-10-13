import en from '@/lang';
import { Response } from 'express';

export const badRequest = (res: Response, message = en.BAD_REQUEST) => {
  res.status(400).send({
    statusCode: 400,
    message,
  });
};

export const success = (res: Response, data, message = en.SUCCESS) => {
  res.json({
    statusCode: 200,
    message,
    data,
  });
};
