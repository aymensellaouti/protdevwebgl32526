import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository, UpdateResult } from "typeorm";

@Injectable()
export class GenericCrud<Entity> {
    constructor(
        protected userRepository: Repository<Entity>
    ) {}
    findAll(): Promise<Entity[]> {
        return this.userRepository.find({
            withDeleted: true
        });
    }
    create(addDto): Promise<Entity> {
        return this.userRepository.save(addDto);
    }
    async softdelete(id: number): Promise<UpdateResult> {
        const result = await this.userRepository.softDelete(id);
        if (!result.affected) throw new NotFoundException();
        return result;
    }
    async restore(id: number): Promise<UpdateResult> {
        const result = await this.userRepository.restore(id);
        if (!result.affected) throw new NotFoundException();
        return result;
    }
}