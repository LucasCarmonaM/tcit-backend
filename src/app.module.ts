import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import * as config from 'config';
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
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
