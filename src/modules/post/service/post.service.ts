import { Injectable } from '@nestjs/common';
import { PostDto } from '../dto/post.dto';
import { PostEntity } from '../model/post.entity';
import { PostMapper } from './post.mapper';
import { PostRepository } from './post.repository';

@Injectable()
export class PostService {
  constructor(
    private postRepository: PostRepository,
    private mapper: PostMapper,
  ) {}

  async getAllPosts(): Promise<PostDto[]> {
    const posts: PostEntity[] = await this.postRepository.getAllPosts();
    return posts.map((post) => this.mapper.entityToDto(post));
  }

  async createPost(postDto: PostDto): Promise<PostDto> {
    const newPost: PostEntity = await this.postRepository.createPost(postDto);
    return this.mapper.entityToDto(newPost);
  }

  async deletePost(id: string): Promise<void> {
    await this.postRepository.deletePost(id);
  }
}
