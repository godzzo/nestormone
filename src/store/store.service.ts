import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository, InsertResult, DeleteResult } from 'typeorm';

import { Store } from './store.sakila.entity';

@Injectable()
export class StoreService {
	constructor(
		@InjectRepository(Store)
		private readonly repository: Repository<Store>,
	) { }

	async findAll(): Promise<Store[]> {
		return await this.repository.find();
	}

	async find(filters: any) : Promise<Store[]> {
		const cfg: any = this.prepareFilters(filters);

		return await this.repository.find(cfg);
	}

	async findAndCount(filters: any) : Promise<[Store[], number]> {
		const cfg: any = this.prepareFilters(filters);

		return await this.repository.findAndCount(cfg);
	}

	private prepareFilters(filters: any): any {
		const cfg: any = { where: filters };

		if (filters.skip) {
			cfg.skip = parseInt(filters.skip);
		}
		if (filters.take) {
			cfg.take = parseInt(filters.take);
		}
		if (filters.order) {
			cfg.order = {};

			cfg.order[filters.order] = filters.orderDir? filters.orderDir.toUpperCase():  "ASC";
		}

		console.log(JSON.stringify(cfg));

		return cfg;
	}

	async insert(params: any) : Promise<InsertResult> {
		return await this.repository.insert(params);
	}

	async save(params: any) : Promise<Store> {
		// const item = await this.repository.preload(params);

		const item = this.repository.create();

		this.repository.merge(item, params);

		if (typeof item.id === "string") {
			item.id = parseInt(item.id);
		}

		return await this.repository.save(item);
	}

	async delete(id: number) : Promise<DeleteResult> {	
		return await this.repository.delete(id);
	}
}