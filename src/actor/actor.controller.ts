import { Controller, Get, Query } from '@nestjs/common';
import { ActorService } from './actor.service';
import { Actor } from './actor.sakila.entity';
import { InsertResult, DeleteResult } from 'typeorm';

@Controller('actor')
export class ActorController {
	constructor(private readonly actorService: ActorService) {}

	@Get()
	async findAll(): Promise<Actor[]> {
		const items = await this.actorService.findAll();
		
		return items;
	}

	@Get("find")
	async find(@Query() params): Promise<Actor[]> {
		console.log(params);

		const items = await this.actorService.find(params);
		
		return items;
	}

	@Get("insert")
	async insert(@Query() params): Promise<InsertResult> {
		return await this.actorService.insert(params);
	}

	@Get("save")
	async save(@Query() params): Promise<Actor> {
		console.log(params);

		return await this.actorService.save(params);
	}

	@Get("delete")
	async delete(@Query() params): Promise<DeleteResult> {
		console.log(params);
		
		return await this.actorService.delete(parseInt(params.id));
	}
}
