import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
	getHello(): string {
		return 'Welcome to Nestar Rest API server!';
	}
}
