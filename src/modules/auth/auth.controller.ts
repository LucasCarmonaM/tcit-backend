import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  @Post('login')
  async login(@Body() loginDto: LoginDto, @Res() response: Response) {
    console.log(loginDto)
    response.status(HttpStatus.OK).json({ token: 'este es el token' });
  }
}
