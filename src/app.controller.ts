import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor() {}

  @Get('')
  getHello(): string {
    return 'Hello GL3';
  }

  @Post('')
  setHello(@Body('test') body): string {
    return 'Hello GL3';
  }
}
