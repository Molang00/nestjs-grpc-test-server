import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Controller, Get } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Hero, HeroById } from './dto/hero.dto';
import { HerosService } from './heros.service';

@Controller()
export class HerosController {
  constructor(private readonly herosService: HerosService) {}

  @GrpcMethod('HeroesService', 'FindOne')
  findOne(data: HeroById, metadata: Metadata, call: ServerUnaryCall<any, any>): Hero {
    console.log('run at server side findOne method')

    const items = [
      { id: 1, name: 'Jhon' },
      { id: 2, name: 'Doe' }
    ]

    return items.find( ({id}) => id === data.id)
  }
}
