import express from 'express';
import noteRoutes from '../routes/noteRoutes';

const server = express();

server.use(express.json());
server.use('/api', noteRoutes);

export default server;
