import express from 'express';
import config from './config';
import router from './routes';
import errorHandler from './middleware/errorHandler';

const app = express();

app.use('/', router);

app.use(errorHandler);
  

app.listen(config.port || 9000, () => {
  console.log(`listening to port ${config.port}`);
});

