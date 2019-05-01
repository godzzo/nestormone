import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { BasesesController } from './baseses.controller';
import { ExpressSessionMiddleware } from '@nest-middlewares/express-session';

@Module({
  controllers: [BasesesController],
})
export class BasesesModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    /*
    ExpressSessionMiddleware.configure({
      secret: 'WHYNEEDED',
      proxy: true,
      resave: true,
      saveUninitialized: true

    });

    consumer
      .apply(ExpressSessionMiddleware)
      .forRoutes(
        {path: 'baseses', method: RequestMethod.ALL}
      );
    */
  }
}
