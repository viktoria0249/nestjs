import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './user_entity';
import { CreateUserDto } from './dto/create_user_dto';
import { RolesService } from '../roles/role_service';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private readonly UsersRepository: Repository<Users>,
    ) { }

    findAll(): Promise<Users[]> {
        return this.UsersRepository.find();
    }

    findOne(id: string): Promise<Users> {
        return this.UsersRepository.findOne(id);
    }

    create(user: Users): Promise<Users> {
        return this.UsersRepository.save(user);
    }

    update(user: Users): Promise<Users> {
        return this.UsersRepository.save(user);
    }

    async remove(id: string): Promise<void> {
        await this.UsersRepository.delete(id);
    }
}