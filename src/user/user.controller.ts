import { Body, Controller, Delete, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { AddUserDto } from './dto/add-user.dto';
import { UserService } from './user.service';
import { UserEntity } from './entity/user.entity';
import { UpdateResult } from 'typeorm';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}
    @Post()
    createUser(
        @Body() addUserDto: AddUserDto
    ): Promise<UserEntity> {
        return this.userService.create(addUserDto)
    }
    
    @Delete(':id')
    softDeleteUser(
        @Param('id') id: number
    ): Promise<UpdateResult> {
        return this.userService.softdelete(id);
        
    }
    @Patch(':id')
    restoreUser(
        @Param('id') id: number
    ): Promise<UpdateResult> {
        return this.userService.restore(id);
        
    }

}
