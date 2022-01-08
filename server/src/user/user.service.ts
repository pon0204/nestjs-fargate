import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async createUser(dto: any) {
    const user = new User();
    user.firstName = dto.firstName;
    user.lastName = dto.lastName;
    user.isActive = dto.isActive;
    return await this.userRepository.save(user);
  }
}
