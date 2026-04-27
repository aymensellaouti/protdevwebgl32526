import { Injectable } from '@nestjs/common';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { GenericCrud } from '../common/db/generic-crud.service';
import { Skill } from './entities/skill.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { APP_EVENTS } from './config/event-const.config';

@Injectable()
export class SkillService extends GenericCrud<Skill> {
  constructor(
    @InjectRepository(Skill)
    private skillRepository: Repository<Skill>,
    protected eventEmitter: EventEmitter2
  ) {
    super(skillRepository)
  }
  async create(createSkillDto: CreateSkillDto): Promise<Skill> {
    const skill = await this.skillRepository.save(createSkillDto);
    this.eventEmitter.emit(APP_EVENTS.addedSkill, { skill });
    return skill;
  }

  findOne(id: number | string) {}
  update(id: number, updateSkillDto: UpdateSkillDto) {
    return `This action updates a #${id} skill`;
  }

  remove(id: number) {
    return `This action removes a #${id} skill`;
  }
}
