import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Roles } from './roles_entity';

@Module({
  imports: [TypeOrmModule.forFeature([Roles])],
  exports: [TypeOrmModule],
  controllers: [],
  providers: [],
})
export class RolesModule { }
