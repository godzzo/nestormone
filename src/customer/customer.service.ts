import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository, InsertResult, DeleteResult } from 'typeorm';

import { Customer } from './customer.sakila.entity';

@Injectable()
export class CustomerService {
	constructor(
		@InjectRepository(Customer)
		private readonly repository: Repository<Customer>,
	) { }

	async findAll(): Promise<Customer[]> {
		return await this.repository.find();
	}

	async find(filters: any) : Promise<Customer[]> {
		const cfg: any = this.prepareFilters(filters);

		return await this.repository.find(cfg);
	}

	async findAndCount(filters: any) : Promise<[Customer[], number]> {
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

	async save(params: any) : Promise<Customer> {
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