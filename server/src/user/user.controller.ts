import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Post()
  async createUser(@Body() body: any) {
    return await this.userService.createUser(body);
  }
}
