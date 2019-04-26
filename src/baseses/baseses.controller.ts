import { Controller, Get, Query, Session, Req } from '@nestjs/common';

@Controller('baseses')
export class BasesesController {
    @Get("info")
	async info(@Query() params, @Session() session, @Req() request): Promise<any> {
        console.log(`request.cookies: ${JSON.stringify(request.cookies)}`);
		console.log(`params.name: ${params.name}`);

        console.log(`OLD session.name: ${session.name}`);

        if (!params.name && !session.name) {
            session.name = 'Joe';    
        } else if (params.name) {
            session.name = params.name;
        }
        
        console.log(`NEW session.name: ${session.name}`);

		return {name: session.name};
	}

}
