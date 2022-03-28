import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Roles } from './roles_entity';

@Injectable()
export class RolesService {
    constructor(
        @InjectRepository(Roles)
        private readonly RolesRepository: Repository<Roles>,
    ) { }

    findAll(): Promise<Roles[]> {
        return this.RolesRepository.find();
    }

    findOne(id: string): Promise<Roles> {
        return this.RolesRepository.findOne(id);
    }

    create(role: Roles): Promise<Roles> {
        return this.RolesRepository.save(role);
    }

    update(role: Roles): Promise<Roles> {
        return this.RolesRepository.save(role);
    }

    async remove(id: string): Promise<void> {
        await this.RolesRepository.delete(id);
    }
}