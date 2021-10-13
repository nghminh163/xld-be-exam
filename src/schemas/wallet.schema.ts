import Joi from 'joi';
import web3 from 'web3';
import en from '@/lang';

export default Joi.object({
  wallet_address: Joi.string()
    .required()
    .custom((value, helper) => {
      const isAddress = web3.utils.isAddress(value);
      if (!isAddress) {
        return helper.error('address.invalid');
      }
      return value;
    })
    .messages({
      'address.invalid': en.ADDRESS_ETH_INVALID_NO_PARAM,
    }),
  balance: Joi.number().required(),
});
