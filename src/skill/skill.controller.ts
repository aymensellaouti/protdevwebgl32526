import { Controller, Get, Post, Body, Patch, Param, Delete, Sse } from '@nestjs/common';
import { SkillService } from './skill.service';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { Observable, fromEvent, map } from 'rxjs';
import { APP_EVENTS } from './config/event-const.config';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Controller('skill')
export class SkillController {
  constructor(private readonly skillService: SkillService, protected eventEmitter: EventEmitter2) {}

  @Post()
  create(@Body() createSkillDto: CreateSkillDto) {
    return this.skillService.create(createSkillDto);
  }

  @Get()
  findAll() {
    return this.skillService.findAll();
  }
  @Sse('sse')
  sse(): Observable<MessageEvent> {
    return fromEvent(this.eventEmitter, APP_EVENTS.addedSkill).pipe(
      map((payload) => {
        console.log({ payload });
        return new MessageEvent('new-skill', { data: payload });
      }),
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.skillService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSkillDto: UpdateSkillDto) {
    return this.skillService.update(+id, updateSkillDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.skillService.remove(+id);
  }
}
