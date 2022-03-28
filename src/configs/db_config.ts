import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Roles } from "src/entities/roles/roles_entity";
import { Users } from "src/entities/users/user_entity";
import { Users_roles } from "src/entities/users_roles/users_roles_entity";
import { User_Info } from "src/entities/user_info/user_info_entity";

const dbconfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'i69uvazah',
    database: 'db_my_app',
    synchronize: true,
    entities: [Users,Users_roles,Roles,User_Info],
}
export {dbconfig};