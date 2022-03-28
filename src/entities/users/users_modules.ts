import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './user_entity';
import { UsersController } from './user_controller';
import { UsersService } from './user_service';

@Module({
  imports: [TypeOrmModule.forFeature([Users]),],
  exports: [TypeOrmModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}