import { Module } from '@nestjs/common';
import { SkillService } from './skill.service';
import { SkillController } from './skill.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Skill } from './entities/skill.entity';
import { SkillListener } from './listeners/skill.listener';

@Module({
  controllers: [SkillController],
  providers: [SkillService, SkillListener],
  imports: [TypeOrmModule.forFeature([Skill])]
})
export class SkillModule {
  
}
