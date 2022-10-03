import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { PostDto } from '../dto/post.dto';
import { PostEntity } from '../model/post.entity';
import { PostMapper } from './post.mapper';

@Injectable()
export class PostRepository {
  constructor(
    @InjectRepository(PostEntity)
    private postRepository: Repository<PostEntity>,
    private mapper: PostMapper,
  ) {}

  getAllPosts(): Promise<PostEntity[]> {
    return this.postRepository.find();
  }

  createPost(postDto: PostDto): Promise<PostEntity> {
    const newPost = this.mapper.dtoToEntity(postDto);
    return this.postRepository.save(newPost);
  }

  deletePost(id: string): Promise<DeleteResult> {
    return this.postRepository.delete(id);
  }
}
