import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/db_module';
import { Entities } from './entities/users/entities_module';

@Module({
  imports: [DatabaseModule, Entities],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
