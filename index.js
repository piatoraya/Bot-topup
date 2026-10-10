import dotenv from 'dotenv';
dotenv.config();

import { createApp } from './src/app.js';
import logger from './src/logger.js';

(async () => {
  try {
    const app = await createApp();
    const port = Number(process.env.PORT || 3000);

    app.listen(port, () => {
      logger.info(`WhatsApp TopUp Bot started on port ${port}`);
    });
  } catch (error) {
    logger.error('Failed to start app:', error);
    process.exit(1);
  }
})();
