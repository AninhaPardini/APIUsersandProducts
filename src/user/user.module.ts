import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { SingleEmail } from './validation/single-email.validator';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserRepository, SingleEmail],
})
export class UserModule {}