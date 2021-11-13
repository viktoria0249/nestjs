import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User_Info } from './user_info_entity';

@Module({
  imports: [TypeOrmModule.forFeature([User_Info])],
  exports: [TypeOrmModule],
  controllers: [],
  providers: [],
})
export class UserInfoModule { }
