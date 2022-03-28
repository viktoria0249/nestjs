import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserInfoController } from './user_info_controller';
import { User_Info } from './user_info_entity';
import { UserInfoService } from './user_info_service';

@Module({
  imports: [TypeOrmModule.forFeature([User_Info]),],
  exports: [TypeOrmModule],
  controllers: [UserInfoController],
  providers: [UserInfoService],
})
export class UserInfoModule {}