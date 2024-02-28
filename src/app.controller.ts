import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { CakeService } from './cakes/cake.service';

@Controller()
export class AppController {
  constructor(private appService: AppService, private cakeService: CakeService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/msg/:param")
  getMsg(@Param("param") param: string): string {
    return this.appService.getMsg(param);
  }
}
