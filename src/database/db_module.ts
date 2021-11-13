import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { dbconfig } from "src/configs/db_config";
import { Entities } from "src/entities/users/entities_module";

@Module({
    imports: [TypeOrmModule.forRoot(dbconfig), Entities],
    controllers:[],
    providers: [],
})
export class DatabaseModule {}