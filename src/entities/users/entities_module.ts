import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersModule } from "./users_module";

@Module({
    imports: [UsersModule],
    exports: [UsersModule],
})
export class Entities {}