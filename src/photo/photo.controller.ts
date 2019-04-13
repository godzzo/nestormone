import { Controller, Get } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { Photo } from './photo.base.entity';

@Controller('photo')
export class PhotoController {
	constructor(private readonly photoService: PhotoService) {}

	@Get()
	async getHello(): Promise<Photo[]> {
		const photos = await this.photoService.findAll();
		
		return photos;
	}
}
