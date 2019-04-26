import { NestFactory } from '@nestjs/core';
// import { cookieParser } from 'cookie-parser';
import * as helmet from 'helmet';
import * as csurf from 'csurf';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.use(helmet());
	app.use(cookieParser('WHYNEEDED'));
	app.enableCors();
//	app.use(csurf());

	await app.listen(3000);
}

bootstrap();
