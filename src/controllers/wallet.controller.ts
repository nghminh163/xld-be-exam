import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import WalletValidate from '@/schemas/wallet.schema';
import { Wallet } from '@/interfaces/wallet.interface';

class WalletController {
  private prisma = new PrismaClient();
  public createWallet = async (req: Request, res: Response): Promise<void> => {
    try {
      await WalletValidate.validateAsync(req.body);
      let data = { ...req.body } as Wallet;
      await this.prisma.wallet.create({
        data,
      });
      res.json({
        statusCode: 200,
        data,
        message: 'Successful',
      });
    } catch (err) {
      if (err?.code === 'P2002') {
        res.status(400).json({
          statusCode: 400,
          message: `"wallet_address" is not unique`,
        });
        return;
      }
      res.status(400).json({
        statusCode: 400,
        message: err.message,
      });
    }
  };
}

export default WalletController;
