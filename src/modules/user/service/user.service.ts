import { Injectable } from '@nestjs/common';
import { UserDTO } from '../dto/user.dto';
import { UserEntity } from '../model/user.entity';
import { UserMapper } from './user.mapper';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(
    private usersRepository: UsersRepository,
    private mapper: UserMapper,
  ) {}

  async getAllUsers(): Promise<UserDTO[]> {
    const users: UserEntity[] = await this.usersRepository.getAllUsers();
    return users.map((user) => this.mapper.entityToDto(user));
  }

  async getUserById(id: string): Promise<UserDTO> {
    const user: UserEntity = await this.usersRepository.getUserById(id);
    return this.mapper.entityToDto(user);
  }

  async newUser(userDTO: UserDTO): Promise<UserDTO> {
    const newUser: UserEntity = await this.usersRepository.createUser(userDTO);
    return this.mapper.entityToDto(newUser);
  }

  async updateUser(id: string, userDTO: UserDTO): Promise<UserDTO> {
    const updateUser = await this.usersRepository.updateUser(id, userDTO);
    return this.mapper.entityToDto(updateUser);
  }

  async deleteUser(id: string): Promise<void> {
    await this.usersRepository.deleteUser(id);
  }
}
