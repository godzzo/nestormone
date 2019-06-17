import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhotoService } from './photo/photo.service';
import { PhotoModule } from './photo/photo.module';
import { ActorService } from './actor/actor.service';
import { CustomerService } from './customer/customer.service';
import { ActorModule } from './actor/actor.module';
import { StoreModule } from './store/store.module';
import { CustomerModule } from './customer/customer.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { ChartController } from './chart/chart.controller';
import { BasesesModule } from './baseses/baseses.module';

const defaultOptions = {
//	name: "default",
	type: "mysql" as "mysql",
	host: "localhost",
	port: 3306,
	username: "godzzo",
	password: "abc123",
	synchronize: true,
	logging: true
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
		CustomerModule,
		StoreModule,
		PhotoModule,
		BasesesModule
	],
	controllers: [AppController, ChartController],
	providers: [AppService, ActorService, CustomerService, PhotoService],
})
export class AppModule {
	constructor(private readonly connection: Connection) {}
}
