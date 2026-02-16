import { Body, Controller, Get, Inject, Param, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller('user')
export class AppController {
  // HAw chneya nhab
  constructor(@Inject(AppService) private appService: AppService) {}

  @Get('')
  getHello(): string {
    return 'Hello GL3';
  }

  @Post(':id')
  addSkillToUser(
    @Body() skill,
    @Param('id') id,
    @Req() request: Request
  ): string {
   // console.log(request);
    
    return skill + id;
  }
}
