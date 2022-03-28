import { Controller, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbconfig } from 'src/configs/db_config';
import { RolesController } from 'src/entities/roles/role_controller';
import { RolesService } from 'src/entities/roles/role_service';
import { Entities } from 'src/entities_module';
import { UsersController } from 'src/entities/users/user_controller';
import { UsersService } from 'src/entities/users/user_service';
import { UserInfoService } from 'src/entities/user_info/user_info_service';
import { UserInfoController } from 'src/entities/user_info/user_info_controller';


@Module({
    imports: [TypeOrmModule.forRoot(dbconfig),Entities],
    controllers: [UsersController,RolesController,UserInfoController],
    providers: [UsersService,RolesService,UserInfoService],
})
export class DatabaseModule {}