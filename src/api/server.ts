import express, { Request, Response } from 'express';

const server = express();

server.use(express.json());

server.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to Notes!' });
});

export default server;
