import { Injectable } from '@nestjs/common';
import { PostDto } from '../dto/post.dto';
import { PostEntity } from '../model/post.entity';

@Injectable()
export class PostMapper {
  dtoToEntity(postDto: PostDto): PostEntity {
    return new PostEntity(postDto.id, postDto.name, postDto.description);
  }

  entityToDto(postEntity: PostEntity): PostDto {
    return new PostDto(postEntity.id, postEntity.name, postEntity.description);
  }
}
