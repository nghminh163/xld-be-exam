import Joi from 'joi';
import web3 from 'web3';

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
      'address.invalid': `"wallet_address" is invalid with Ethereum address`,
    }),
  balance: Joi.number().required(),
});
