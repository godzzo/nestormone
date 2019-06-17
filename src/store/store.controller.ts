import { Controller, Get, Query, Param, ParseIntPipe, Body, Post } from '@nestjs/common';

import { InsertResult, DeleteResult } from 'typeorm';

import { StoreService } from './store.service';
import { Store } from './store.sakila.entity';


@Controller('store')
export class StoreController {
	constructor(private readonly service: StoreService) {}

	@Get()
	async findAll(): Promise<Store[]> {
		const items = await this.service.findAll();
		
		return items;
	}

	@Get("find")
	async find(@Query() params): Promise<Store[]> {
		console.log(params);

		const items = await this.service.find(params);
		
		return items;
	}

	@Get("findAndCount")
	async findAndCount(@Query() params): Promise<any> {
		console.log(params);

		const [items, count] = await this.service.findAndCount(params);
		
		return {items, count};
	}

	@Get('get/:id')
	async get(@Param('id', new ParseIntPipe()) id): Promise<Store[]> {
		console.log(id);

		const items = await this.service.find({id: id});
		
		return items;
	}

	@Get("insert")
	async insert(@Query() params): Promise<InsertResult> {
		return await this.service.insert(params);
	}

	@Get("save")
	async save(@Query() params): Promise<Store> {
		console.log(params);

		return await this.service.save(params);
	}

	@Get("create")
	async create(@Query() params): Promise<InsertResult> {
		return await this.service.insert(params);
	}

	@Post('modify')
	async modify(@Body() params): Promise<Store> {
		console.log(params);

		return await this.service.save(params);
	}

	@Get("delete")
	async delete(@Query() params): Promise<DeleteResult> {
		console.log(params);
		
		return await this.service.delete(parseInt(params.id));
	}
}
