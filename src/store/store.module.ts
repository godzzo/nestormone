import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreService } from './store.service';
import { StoreController } from './store.controller';
import { Store } from './store.sakila.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Store], 'sakilaConnection')],
  providers: [StoreService],
  controllers: [StoreController],
})
export class StoreModule {}