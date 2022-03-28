import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User_Info } from './user_info_entity';

@Injectable()
export class UserInfoService {
    constructor(
        @InjectRepository(User_Info)
        private readonly UserInfoRepository: Repository<User_Info>,
    ) { }

    findAll(): Promise<User_Info[]> {
        return this.UserInfoRepository.find();
    }

    findOne(id: string): Promise<User_Info> {
        return this.UserInfoRepository.findOne(id);
    }

    create(info: User_Info): Promise<User_Info> {
        return this.UserInfoRepository.save(info);
    }

    update(info: User_Info): Promise<User_Info> {
        return this.UserInfoRepository.save(info);
    }

    async remove(id: string): Promise<void> {
        await this.UserInfoRepository.delete(id);
    }
}