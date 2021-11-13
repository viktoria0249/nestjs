import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersRolesModule } from "./users_roles_module";

@Module({
    imports: [UsersRolesModule],
    exports: [UsersRolesModule],
})
export class Entities {}