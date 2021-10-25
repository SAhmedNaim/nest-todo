import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TodoModule,
    AuthModule,
    MongooseModule.forRoot('mongodb://localhost/nest-todo'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
