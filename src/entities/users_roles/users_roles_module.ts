import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users_Roles } from './users_roles_entity';

@Module({
  imports: [TypeOrmModule.forFeature([Users_Roles])],
  exports: [TypeOrmModule],
  controllers: [],
  providers: [],
})
export class UsersRolesModule { }
