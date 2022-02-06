import { CreateTodoDto } from './todo.dto';
import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { TodoEntity } from './todo.entity';
import { TodoService } from './todo.service';

@Crud({
  model: {
    type: TodoEntity,
  },
  dto: {
    create: CreateTodoDto,
  },
})
@Controller('todo')
export class TodoController implements CrudController<TodoEntity> {
  constructor(public service: TodoService) {}
}
