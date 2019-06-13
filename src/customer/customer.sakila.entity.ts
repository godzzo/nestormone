import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Customer {
	// azonosító
	@PrimaryGeneratedColumn({"name":"customer_id"})
	id: number;
	

	
	// bolt / raktár
	@Column({"name":"store_id"})
	storeId: number;
	

	
	// elő név
	@Column({"name":"first_name","length":200})
	firstName: string;
	

	
	// utó név
	@Column({"name":"last_name","length":200})
	lastName: string;
	

	
	// e-mail
	@Column({"name":"email","length":200})
	email: string;
	

	
	// cím
	@Column({"name":"address_id"})
	addressId: number;
	

	
	// aktív
	@Column({"name":"active"})
	active: boolean;
	

	
	// készült
	@Column({"name":"create_date"})
	createDate: Date;
	

	
	// módosult
	@Column({"name":"last_update"})
	lastUpdate: Date;
	

}
