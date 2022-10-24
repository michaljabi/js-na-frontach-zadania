import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SignUpDto } from 'src/auth/signUp.dto';
import { Repository } from 'typeorm';
import { ClientEntity } from './client.entity';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(ClientEntity)
    private userRepository: Repository<ClientEntity>,
  ) {}

  async create(user: SignUpDto): Promise<ClientEntity> {
    return await this.userRepository.save(user);
  }

  async findByEmail(email: string): Promise<ClientEntity> {
    return await this.userRepository.findOneBy({ email });
  }

  async getById(id: string): Promise<ClientEntity> {
    return await this.userRepository.findOneBy({ id });
  }
}
