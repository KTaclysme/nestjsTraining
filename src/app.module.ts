import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggingMiddleware } from './logging/logging.middleware';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseConnectionMiddleware } from './db-connection/db-connection.middleware';
import { TaskValidationMiddleware } from './task-validator/task-validator.middleware';
@Module({
  imports: [
    TasksModule,
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: 'mongodb://127.0.0.1:27017', 
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService,DatabaseConnectionMiddleware,TaskValidationMiddleware],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware,DatabaseConnectionMiddleware,TaskValidationMiddleware)
    .forRoutes('*');
  }
}
