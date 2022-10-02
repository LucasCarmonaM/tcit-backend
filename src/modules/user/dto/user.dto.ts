import { ApiProperty } from '@nestjs/swagger';

export class UserDTO {
  @ApiProperty()
  id?: string;

  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly email: string;

  constructor(id: string, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}
