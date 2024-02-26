import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  private readonly logger = new Logger('HTTP');

  use(req: Request, res: Response, next: NextFunction) {
    const { method, url, ip } = req;
    const userAgent = req.get('user-agent') || '';

    // Log request details
    this.logger.log(`Request ${method} ${url} from ${ip} by ${userAgent}`);

    // Pass request to the next middleware or route handler
    next();
  }
}
