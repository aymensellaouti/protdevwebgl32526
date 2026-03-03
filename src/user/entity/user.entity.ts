import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { TimeStampEntity } from "../../common/db/timestamp.entity";
import { Skill } from "../../skill/entities/skill.entity";

@Entity('user')
export class UserEntity extends TimeStampEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({
        length: 50
    })
    email: string;
    @Column()
    password: string;
    @ManyToMany(
        type => Skill,
        null,
        {
            eager: true
        }
    )
    @JoinTable({
        name: 'user_skills',
        joinColumn: {
            name: 'user',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'skill',
            referencedColumnName: 'id'
        }
    })
    skills: Skill[];
}