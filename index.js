import express from 'express';
import config from './config';
import router from './routes';

const app = express();

app.use('/', router);
  

app.listen(config.port || 9000, () => {
  console.log(`listening to port ${config.port}`);
});

