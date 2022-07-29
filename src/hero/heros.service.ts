import { Injectable } from '@nestjs/common';

@Injectable()
export class HerosService {
  getHello(): string {
    return 'Hello World!';
  }
}
