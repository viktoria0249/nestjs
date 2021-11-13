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
  
  import { Users } from './user_entity';
  import { CreateUserDto, UpdateUserDto} from './dto/create_user_dto';
  import { UsersService } from './user_service';
  
  @Controller('Users')
  export class UsersController {
    constructor(private UsersService: UsersService) {}
  
    @Post()
    create(@Body() createUserDto: CreateUserDto): Promise<Users> {
      const user = new Users();
      user.login = createUserDto.login;
      user.password = createUserDto.password;
      user.create_at= createUserDto.create_at;
      user.delete_at= createUserDto.delete_at;
      return this.UsersService.create(user);
    }
  
    @Get()
    async findAll(): Promise<Users[]> {
      return this.UsersService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Users> {
      const user = this.UsersService.findOne(id);
      if (user === undefined) {
        alert(`User with id = #${id} is not exists`);
      }
      return user;
    }
  
    @Put(':id')
    async update(
      @Param('id') id: string,
      @Body() { login, password, create_at, delete_at }: UpdateUserDto,
    ): Promise<Users> {
      const user = await this.UsersService.findOne(id);
      if (user === undefined) {
        console.log(`User with id = ${id} is not exists`);
      }
      user.login = login;
      user.password = password;
      user.create_at = create_at;
      user.delete_at = delete_at;
      return this.UsersService.update(user);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
      return this.UsersService.remove(id);
    }
  }