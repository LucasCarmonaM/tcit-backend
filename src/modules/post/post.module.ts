import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from './model/post.entity';
import { PostController } from './post.controller';
import { PostMapper } from './service/post.mapper';
import { PostRepository } from './service/post.repository';
import { PostService } from './service/post.service';

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity])],
  controllers: [PostController],
  providers: [PostMapper, PostRepository, PostService],
})
export class PostModule {}
