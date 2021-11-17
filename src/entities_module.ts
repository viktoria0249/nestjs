import { Module } from "@nestjs/common";
import { UsersModule } from "./entities/users/users_module";
import { RolesModule } from "./entities/roles/roles_module";
import { UserInfoModule } from "./entities/user_info/user_info_module";
import { UsersRolesModule } from "./entities/users_roles/users_roles_module";

@Module({
    imports: [UsersModule, RolesModule,UserInfoModule,UsersRolesModule],
    exports: [UsersModule, RolesModule,UserInfoModule,UsersRolesModule],
})
export class Entities {}