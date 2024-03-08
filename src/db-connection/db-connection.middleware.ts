import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';

@Injectable()
export class DatabaseConnectionMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    try {
      // Check if the MongoDB connection is established
      if (mongoose.connection.readyState == 1) {
        // If connection state is not 'connected', throw an error
        console.log('MongoDB connection is established');
        next();
      } else {
        throw new Error('MongoDB connection not established'); 
      }
    } catch (error) {
      // Handle the error if the connection is not established
      console.error('Error connecting to MongoDB:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}
