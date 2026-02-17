import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ValidationArguments } from 'class-validator/types/validation/ValidationArguments';

@Module({
  imports: [],
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