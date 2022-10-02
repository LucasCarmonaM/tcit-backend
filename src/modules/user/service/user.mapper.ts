import { Injectable } from '@nestjs/common';
import { UserDTO } from '../dto/user.dto';
import { UserEntity } from '../model/user.entity';

@Injectable()
export class UserMapper {
  dtoToEntity(userDTO: UserDTO): UserEntity {
    return new UserEntity(userDTO.id, userDTO.name, userDTO.email);
  }

  entityToDto(userEntity: UserEntity): UserDTO {
    return new UserDTO(userEntity.userId, userEntity.name, userEntity.email);
  }
}
