import { Photo } from './src/photo/photo.base.entity';
import { Actor } from './src/actor/actor.sakila.entity';

module.exports = [{
	"name": "default",
	"type": "mysql",
	"host": "localhost",
	"port": 3306,
	"username": "godzzo",
	"password": "abc123",
	"database": "nestormone",
//	"entities": ["src/**/**.base.entity{.ts,.js}"],
	"entities": [Photo],
	"synchronize": true
},
{
	"name": "sakila",
	"type": "mysql",
	"host": "localhost",
	"port": 3306,
	"username": "godzzo",
	"password": "abc123",
	"database": "sakila",
//	"entities": ["src/**/**.sakila.entity{.ts,.js}"],
	"entities": [Actor],
	"synchronize": false
}];
