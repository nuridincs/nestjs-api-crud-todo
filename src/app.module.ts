import { Module } from '@nestjs/common';
import { TodoController } from './todo/todo.controller';
import { TodoService } from './todo/todo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConnectionService } from './shared/services/database-connection.service';
// import { TodoModule } from './todo/todo.module';
import { TodoEntity } from './todo/todo.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConnectionService,
    }),
    TypeOrmModule.forFeature([TodoEntity]),
    // TodoModule,
  ],
  controllers: [TodoController],
  providers: [TodoService],
})
export class AppModule {}
