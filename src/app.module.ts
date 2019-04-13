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

const defaultOptions = {
//	name: "default",
	type: "mysql" as "mysql",
	host: "localhost",
	port: 3306,
	username: "godzzo",
	password: "abc123",
	synchronize: true
};

@Module({
	imports: [
		TypeOrmModule.forRoot({
			...defaultOptions,
			database: "nestormone",
			entities: ["src/**/**.base.entity{.ts,.js}"],
		}),
		TypeOrmModule.forRoot({
			...defaultOptions,
			name: 'sakilaConnection',
			database: "sakila",
			entities: ["src/**/**.sakila.entity{.ts,.js}"],
			synchronize: false
		}),
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
