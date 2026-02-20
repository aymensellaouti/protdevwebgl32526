import { CreateDateColumn, UpdateDateColumn, DeleteDateColumn, VersionColumn } from "typeorm";

export class TimeStampEntity {
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    udatedAt: Date;
    @DeleteDateColumn()
    deletedAt: Date;
    @VersionColumn()
    version: number;
}