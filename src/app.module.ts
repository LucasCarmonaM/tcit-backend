import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as config from 'config';
import { PostModule } from './modules/post/post.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: config.get('DB.DB_HOST'),
      port: config.get('DB.DB_PORT'),
      username: config.get('DB.DB_USER'),
      password: config.get('DB.DB_PASS'),
      database: config.get('DB.DB_NAME'),
      autoLoadEntities: true,
      synchronize: config.get('DB.DB_SYNC'),
    }),
    PostModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
