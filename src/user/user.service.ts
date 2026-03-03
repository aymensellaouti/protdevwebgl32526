import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericCrud } from '../common/db/generic-crud.service';
import { minDate } from 'class-validator';
import { qdDateInterval } from '../common/db/helpers';

@Injectable()
export class UserService extends GenericCrud<UserEntity>{

    constructor(
        @InjectRepository(UserEntity)
        userRepository: Repository<UserEntity>
    ) {
        super(userRepository)
    }

    findWithQB(minDate: Date, maxDate: Date) {
        const qb = this.userRepository.createQueryBuilder('user');
        // qb.where(`createdAt >= :minDate`, {minDate} )
        //     .andWhere(`createdAt <= :maxDate`, {maxDate})
        // console.log(qb);
        qdDateInterval(qb, 'cretaedAt', minDate, maxDate)

    }
}
