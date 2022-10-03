import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { PostDto } from './dto/post.dto';
import { PostService } from './service/post.service';

@Controller('posts')
export class PostController {
  constructor(private postService: PostService) {}

  @Get()
  async getAllPost(@Res() res: Response): Promise<void> {
    const data = await this.postService.getAllPosts();
    res.status(HttpStatus.OK).json({ data: data });
  }

  @Post()
  async newPost(@Body() post: PostDto, @Res() res: Response): Promise<void> {
    const data = await this.postService.createPost(post);
    res.status(HttpStatus.CREATED).json({ ...data });
  }

  @Delete(':id')
  async deletePost(
    @Param('id') id: string,
    @Res() res: Response,
  ): Promise<void> {
    const data = await this.postService.deletePost(id);
    res.status(HttpStatus.OK).json({message: 'Deleted Correctly'});
  }
}
