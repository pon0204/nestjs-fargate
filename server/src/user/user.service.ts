import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user-dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async createUser(dto: CreateUserDto) {
    return await this.userRepository.save({ ...dto });
  }

  async updateUser(id: string, dto: UpdateUserDto) {
    const { firstName, lastName, isActive } = dto;
    await this.userRepository.update(id, {
      firstName,
      lastName,
      isActive,
    });
  }

  async deleteUser(id: string) {
    await this.userRepository.delete(id);
  }
}

// async createUser(dto: CreateUserDto) {
// const user = new User();
// user.firstName = dto.firstName;
// user.lastName = dto.lastName;
// user.isActive = dto.isActive;
// return await this.userRepository.save(user);
// }
