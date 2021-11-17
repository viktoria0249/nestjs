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
  import { Roles } from './roles_entity';
  import { CreateRoleDto } from './dto/role_dto';
  import { UpdateRoleDto } from './dto/role_dto';
  import { RolesService } from './role_service';
  
  @Controller('Roles')
  export class RolesController {
    constructor(private RolesService: RolesService) {}
  
    @Post()
    create(@Body() createRoleDto: CreateRoleDto): Promise<Roles> {
      const role = new Roles();
      role.name = createRoleDto.name;
      return this.RolesService.create(role);
    }
  
    @Get()
    async findAll(): Promise<Roles[]> {
      return this.RolesService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Roles> {
      const role = this.RolesService.findOne(id);
      if (role === undefined) {
        alert(`Role with id = #${id} is not exists`);
      }
      return role;
    }
  
    @Put(':id')
    async update(
      @Param('id') id: string,
      @Body() { name}: UpdateRoleDto,
    ): Promise<Roles> {
      const role = await this.RolesService.findOne(id);
      if (role === undefined) {
        console.log(`Role with id = ${id} is not exists`);
      }
      role.name = name;
      return this.RolesService.update(role);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
      return this.RolesService.remove(id);
    }
  }