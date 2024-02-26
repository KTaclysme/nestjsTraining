import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CakeModule } from './cakes/cake.module';

@Module({
  imports: [CakeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
