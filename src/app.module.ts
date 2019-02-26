import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PhotoController } from './photo/photo.controller';
import { AppService } from './app.service';
import { PhotoService } from './photo/photo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { PhotoModule } from './photo/photo.module';

@Module({
  imports: [
	TypeOrmModule.forRoot(),
	PhotoModule
  ],
  controllers: [AppController, PhotoController],
  providers: [AppService, PhotoService],
})
export class AppModule {
	constructor(private readonly connection: Connection) {}
}
