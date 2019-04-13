import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhotoController } from './photo/photo.controller';
import { PhotoService } from './photo/photo.service';
import { PhotoModule } from './photo/photo.module';
import { ActorController } from './actor/actor.controller';
import { ActorService } from './actor/actor.service';
import { ActorModule } from './actor/actor.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { ChartController } from './chart/chart.controller';

@Module({
  imports: [
  TypeOrmModule.forRoot(),
  ActorModule,
  PhotoModule
  ],
  controllers: [AppController, ActorController, PhotoController, ChartController],
  providers: [AppService, ActorService, PhotoService],
})
export class AppModule {
	constructor(private readonly connection: Connection) {}
}
