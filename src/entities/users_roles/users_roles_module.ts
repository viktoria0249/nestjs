import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users_roles} from './users_roles_entity';

@Module({
  imports: [TypeOrmModule.forFeature([Users_roles]),],
  exports: [TypeOrmModule],
  controllers: [],
  providers: [],
})
export class UsersRolesModule {}