import { NestFactory } from "@nestjs/core";
import { AppModule } from "../app.module";
import { UserService } from "../user/user.service";
import { SkillService } from "../skill/skill.service";

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);

    const skillService = app.get(SkillService);
    const skills = [];
    for(let i=0; i<10; i++) {
        skills.push(await skillService.create({designation: `Skill ${i}`}));
    }

    const userService = app.get(UserService);
    
    for(let i=0; i<10; i++) {
        let someSkills = skills.sort(() => Math.random() - 0.5);
        await userService.create({email: `email${i}@gmail.com`, password:'password', skills: someSkills.slice(0,3)});
        //await skillService.create({designation: `Skill ${i}`});
    }
    console.log(('In seeder'));
    
    // crée un user 

    // persistih fel DB

    app.close();
}

bootstrap();