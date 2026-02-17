import { Body, Controller, Get, Inject, Param, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import { IsNotEmpty, IsNumber, MinLength } from 'class-validator';
export class SkillDto {
  @IsNotEmpty()
  name: string;
  @MinLength(5)
  description: string;
  @IsNumber()
  priority: number;
}
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
    @Body() skill: SkillDto,
    @Param('id') id,
    @Req() request: Request
  ): SkillDto {
    console.log(skill);
    
   // console.log(request);
    
    return skill;
  }
}


