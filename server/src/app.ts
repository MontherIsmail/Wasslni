import express from 'express';
import * as dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { join } from 'path';
import { clientError, serverError } from './controllers';
import router from './routes';

dotenv.config();

const { PORT, NODE_ENV } = process.env;
const app = express();

app.set('port', PORT || 5000);
app.use([express.json(), express.urlencoded({ extended: true }), cookieParser()]);

// API routes
app.use('/api/v1', router);

// Optional: test route to confirm backend is running
app.get('/wasslni-server', (req, res) => {
  res.send('Wasslni backend is running!');
});

// Error handling
app.use(clientError);
app.use(serverError);

export default app;
