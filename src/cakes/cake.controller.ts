import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CakeService } from './cake.service';

@Controller("cake")
export class CakeController {
  constructor(private readonly cakeService: CakeService) {}

  @Get()
  getCake(): string {
    return this.cakeService.getCake();
  }
}
