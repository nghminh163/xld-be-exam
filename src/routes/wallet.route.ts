import { Router } from 'express';
import { Route } from '@interfaces/route.interface';
import WalletController from '@/controllers/wallet.controller';

class WalletRoute implements Route {
  public path = '/wallet';
  public router = Router();
  public walletController = new WalletController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/create`, this.walletController.createWallet);
  }
}

export default WalletRoute;
