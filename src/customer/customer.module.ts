import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { Customer } from './customer.sakila.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Customer], 'sakilaConnection')],
  providers: [CustomerService],
  controllers: [CustomerController],
})
export class CustomerModule {}
