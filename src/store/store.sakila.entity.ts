import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, JoinTable } from 'typeorm';
import { Customer } from 'src/customer/customer.sakila.entity';

@Entity()
export class Store {
	@PrimaryGeneratedColumn({ "name": "store_id" })
	id: number;

	// főnök
	@Column({ "name": "manager_staff_id" })
	managerStaffId: number;

	// cím
	@Column({ "name": "address_id" })
	addressId: number;

	// módosult
	@Column({ "name": "last_update" })
	lastUpdate: Date;

	@OneToMany(type => Customer, customer => customer.store, {
		eager: true
	})
	@JoinTable()
	customers: Customer[];
}
