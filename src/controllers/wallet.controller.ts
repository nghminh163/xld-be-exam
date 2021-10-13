import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import WalletValidate from '@/schemas/wallet.schema';
import { Wallet } from '@/interfaces/wallet.interface';
import web3 from 'web3';
import en from '@/lang';
import { badRequest, success } from '@/utils/httpResponse';
import _ from 'lodash';
class WalletController {
  private prisma = new PrismaClient();
  public createWallet = async (req: Request, res: Response): Promise<void> => {
    try {
      await WalletValidate.validateAsync(req.body);
      let data = { ...req.body } as Wallet;
      await this.prisma.wallet.create({
        data,
      });
      success(res, data);
    } catch (err) {
      if (err?.code === 'P2002') {
        badRequest(res, en.WALLET_NOT_UNIQUE);
        return;
      }
      badRequest(res, err?.message);
    }
  };

  public readWallet = async (req: Request, res: Response): Promise<void> => {
    try {
      const address = req.query?.wallet_address;
      if (_.isString(address)) {
        const isAddress = web3.utils.isAddress(address);
        if (isAddress) {
          const data = await this.prisma.wallet.findFirst({ where: { wallet_address: address } });
          res.send(data);
        } else {
          badRequest(res, en.ADDRESS_ETH_INVALID);
        }
        return;
      }
    } catch (e) {
      badRequest(res, e?.message);
    } finally {
      badRequest(res);
    }
  };
}

export default WalletController;
