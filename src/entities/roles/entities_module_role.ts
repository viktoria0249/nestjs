import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RolesModule } from "./roles_module";

@Module({
    imports: [RolesModule],
    exports: [RolesModule],
})
export class Entities {}