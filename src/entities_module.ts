import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesModule } from './entities/roles/roles_modules';
import { RolesService } from './entities/roles/role_service';
import { UsersModule } from './entities/users/users_modules';
import { UsersRolesModule } from './entities/users_roles/users_roles_module'; 
import { UserInfoModule } from './entities/user_info/user_info_modules';

@Module({
    imports: [UsersModule,RolesModule,UserInfoModule,UsersRolesModule],
    exports: [UsersModule,RolesModule,UserInfoModule,UsersRolesModule],
})
export class Entities{}