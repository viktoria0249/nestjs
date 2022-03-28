import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entities } from './entities_module';
import { DatabaseModule } from './database/db_modules';

@Module({
  imports: [DatabaseModule,Entities],
  controllers: [],
  providers: [],
})
export class AppModule {}