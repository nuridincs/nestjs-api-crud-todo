import { ApiProperty } from '@nestjsx/crud/lib/crud';

export class CreateTodoDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  is_done: boolean;
}
