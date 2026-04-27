import { Injectable } from "@nestjs/common";
import { OnEvent } from "@nestjs/event-emitter";
import { APP_EVENTS } from "../config/event-const.config";

@Injectable() 
export class SkillListener { 
    @OnEvent(APP_EVENTS.addedSkill) async handleCvAdded(payload: any) {     
    // Do what you want with the payload);   
    console.log({payload});
    }
}
