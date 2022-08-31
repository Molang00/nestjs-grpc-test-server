import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Injectable } from '@nestjs/common';
import { Hero, HeroById } from './dto/hero.dto';

@Injectable()
export class HerosService {

  findOne(data: HeroById, metadata: Metadata, call: ServerUnaryCall<any, any>): Hero {
    console.log('run at server side findOne method')

  const items = [
    { id: 1, name: 'Jhon' },
    { id: 2, name: 'Doe' }
  ]

  return items.find( ({id}) => id === data.id)
  }
  
}
