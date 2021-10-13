import 'dotenv/config';
import App from '@/app';

// Routes
import WalletRoute from '@routes/wallet.route';

const app = new App([new WalletRoute()]);

app.listen();
