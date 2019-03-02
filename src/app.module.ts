import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PhotoController } from './photo/photo.controller';
import { AppService } from './app.service';
import { PhotoService } from './photo/photo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { PhotoModule } from './photo/photo.module';
import { ChartController } from './chart/chart.controller';

@Module({
  imports: [
	TypeOrmModule.forRoot(),
	PhotoModule
  ],
  controllers: [AppController, PhotoController, ChartController],
  providers: [AppService, PhotoService],
})
export class AppModule {
	constructor(private readonly connection: Connection) {}
}
