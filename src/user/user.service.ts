import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository, UpdateResult } from 'typeorm';
import { UserEntity } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { AddUserDto } from './dto/add-user.dto';

@Injectable()
export class UserService {
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

    constructor(
        @InjectRepository(UserEntity)
        protected userRepository: Repository<UserEntity>
    ) {}

    create(addUserDto: AddUserDto): Promise<UserEntity> {
        return this.userRepository.save(addUserDto);
    }
}
