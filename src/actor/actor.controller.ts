import { Controller, Get } from '@nestjs/common';
import { ActorService } from './actor.service';
import { Actor } from './actor.sakila.entity';

@Controller('actor')
export class ActorController {
	constructor(private readonly actorService: ActorService) {}

	@Get()
	async getHello(): Promise<Actor[]> {
		const photos = await this.actorService.findAll();
		
		return photos;
	}
}
