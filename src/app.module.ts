import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ValidationArguments } from 'class-validator/types/validation/ValidationArguments';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { UserEntity } from './user/entity/user.entity';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      database: 'gl32526',
      host: 'localhost',
      username: 'root',
      password: '',
      type:'mysql',
      //entities: [UserEntity],
      autoLoadEntities: true,
      synchronize: true,
      logging: true
    }),
    UserModule,
    CommonModule
  ],
  controllers: [AppController],
  providers: [AppService],
  // exports: [AppService],
})
export class AppModule { }


const minMaxMessageError = (isMin = true) => {
  let lengthMessage = 'est courte, la taille minimale de';
  if(!isMin){
    lengthMessage = 'est longue, la taille maximale de';
  }
  return (validationData: ValidationArguments) => {
    return `La taille de votre ${validationData.property} 	${validationData.value} ${lengthMessage} ${validationData.property} est 	${validationData.constraints[0]}`
  }
}