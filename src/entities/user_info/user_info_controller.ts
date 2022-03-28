import { User_Info } from "./user_info_entity";
import { CreateInfoDto, UpdateInfoDto } from "./dto/user_info_dto";
import { UserInfoService } from "./user_info_service";
import {
    Controller,
    Get,
    Query,
    Post,
    Body,
    Put,
    Param,
    Delete,
} from '@nestjs/common';
import { info } from "console";

@Controller('UserInfo')
export class UserInfoController {
    constructor(private UserInfoService: UserInfoService) { }

    @Post()
    create(@Body() createInfoDto: CreateInfoDto): Promise<User_Info> {
        const info = new User_Info();
        info.name = createInfoDto.name;
        info.surname = createInfoDto.surname;
        info.patronymic = createInfoDto.patronymic;
        return this.UserInfoService.create(info);
    }

    @Get()
    findAll(): Promise<User_Info[]> {
        return this.UserInfoService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<User_Info> {
        const info = this.UserInfoService.findOne(id);
        if (info === undefined) {
            alert(`User with id = #${id} is not exists`);
        }
        return info;
    }

    @Put(':id')
    async update(
        @Param('id') id: string,
        @Body() { name, surname, patronymic }: UpdateInfoDto,): Promise<User_Info> {
        const info = await this.UserInfoService.findOne(id);
        if (info === undefined) {
            console.log(`User with id = ${id} is not exists`);
        }
        info.name = name;
        info.surname = surname;
        info.patronymic = patronymic;
        return this.UserInfoService.update(info);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.UserInfoService.remove(id);
    }
}