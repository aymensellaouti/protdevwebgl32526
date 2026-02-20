import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { TimeStampEntity } from "../../common/db/timestamp.entity";

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
}