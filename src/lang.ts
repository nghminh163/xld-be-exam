export default {
  ADDRESS_ETH_INVALID: (address: string) => `${address} is invalid with Ethereum address`,
  ADDRESS_ETH_INVALID_NO_PARAM: `"wallet_address" is invalid with Ethereum address`,

  BAD_REQUEST: 'Bad Request',
  WALLET_NOT_UNIQUE: `"wallet_address" is not unique`,
  SUCCESS: 'Successful',
  WALLET_NOT_FOUND: `"wallet_address" is not found`,
  WALLET_DELETED: (address: string) => `${address} has been deleted`,
};
