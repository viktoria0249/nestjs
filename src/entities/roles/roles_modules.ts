import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Roles } from './roles_entity';
import { RolesController } from './role_controller';
import { RolesService } from './role_service';

@Module({
  imports: [TypeOrmModule.forFeature([Roles]),],
  exports: [TypeOrmModule],
  controllers: [RolesController],
  providers: [RolesService],
})
export class RolesModule {}