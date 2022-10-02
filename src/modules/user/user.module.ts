import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './model/user.entity';
import { UserMapper } from './service/user.mapper';
import { UsersService } from './service/user.service';
import { UsersRepository } from './service/users.repository';
import { UsersController } from './user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UsersController],
  providers: [UserMapper, UsersRepository, UsersService],
})
export class UserModule {}
