import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../app.module';
import * as request from 'supertest';
import { PostModule } from '../modules/post/post.module';
import { PostDto } from '../modules/post/dto/post.dto';

describe('TCIT Backend (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, PostModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('posts CRUD', async () => {
    const server = request(app.getHttpServer());

    const currentGetAllRequest = await server.get('/posts').expect(200);
    const currentSize = currentGetAllRequest.body.data.length;

    // Post creation test
    const newPost: PostDto = {
      name: 'test',
      description: 'this is a test post',
    };
    const newPostRequest = await server
      .post('/posts')
      .type('form')
      .send(newPost)
      .expect(201);
    expect(newPostRequest.body.name).toBe(newPost.name);
    expect(newPostRequest.body.description).toBe(newPost.description);

    const postNewRequest = await server.get('/posts').expect(200);
    const postNewSize = postNewRequest.body.data.length;
    expect(postNewSize).toBe(currentSize + 1);

    // User delete test
    await server.delete(`/posts/${newPostRequest.body.id}`).expect(200);
    const afterDeletePool = await server.get('/posts').expect(200);
    const postDeleteSize = afterDeletePool.body.data.length;
    expect(postDeleteSize).toBe(currentSize);
  });
});
