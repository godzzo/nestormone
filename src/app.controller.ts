import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
	constructor(private readonly appService: AppService) { }

	@Get()
	getHello(): string {
		return this.appService.getHello();
	}

	@Post('testBody')
	testBody(@Body() obj: any): any {
		console.log(JSON.stringify(obj));

		return obj;
	}
}
