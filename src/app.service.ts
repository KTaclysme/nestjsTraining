import { Body, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getMsg(param: string): string {
    return `Bienvenu ${param}`;
  }
}
