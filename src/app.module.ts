import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggingMiddleware } from './logging/logging.middleware';
import { TasksModule } from './tasks/tasks.module';
import { TasksController } from './tasks/tasks.controller';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [TasksModule, MongooseModule.forRoot('mongodb://localhost:27017')],
  controllers: [AppController, TasksController],
  providers: [AppService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggingMiddleware)
      .forRoutes(AppController);
  }
}
