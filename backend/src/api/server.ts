import express from 'express';
import cors from 'cors';

import noteRoutes from '../routes/noteRoutes';

const server = express();

server.use(cors({
  origin: 'http://localhost:3000',
}));

server.use(express.json());
server.use('/api', noteRoutes);

export default server;
