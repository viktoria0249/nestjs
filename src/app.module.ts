import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/db_module';
import { Entities } from './entities_module';

@Module({
  imports: [DatabaseModule, Entities],
  controllers: [],
  providers: [],
})
export class AppModule { }
